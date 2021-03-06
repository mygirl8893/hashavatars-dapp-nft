
import React, { Component, useState, useEffect, useRef } from 'react'
import Phaser from 'phaser'
import { IonPhaser, GameInstance } from '@ion-phaser/react'
import {
  Box,
  Heading,
  Text,
  VStack,
  theme,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Divider,
  Link,
  Center,
  Spinner,
  Popover,
  Avatar
} from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'



let metadata;
let metadatas;
let cursors;
let web3;
let coinbase;

class MainScene extends Phaser.Scene {
  private helloWorld!: Phaser.GameObjects.Text
  private player: Phaser.GameObjects.Sprite

  private platforms: Phaser.GameObjects.Sprite;
  private mplatform: Phaser.GameObjects.Sprite;
  private totalMp: Phaser.GameObjects.Sprite;

  private bombs: Phaser.GameObjects.Sprite;
  private enemiesKilled: Integer;

  init () {
    this.cameras.main.setBackgroundColor('#24252A')
  }
  async preload() {
      const tokenId = await gameSC.methods.players(coinbase).call().tokenId;
      const imageHash = await itoken.methods.uri(tokenId).call();
      this.load.image("player", metadata.image.replace("ipfs://",`https://ipfs.io/ipfs/${imageHash}`));
  }

  hitEnemy (player, enemy){
      if(enemy.body.touching.up && !this.player.body.touching.up){
        enemy.destroy();
      } else if(player.body.touching.up && !enemy.body.touching.up) {
        player.setPosition(10,10);
      } else {
        enemy.destroy();
        player.setPosition(10,10);
      }
  }

  update () {
    this.input.on('pointerdown', async function (pointer) {
      try{
        await this.gameSC.move(this.input.x,this.input.y,this.player.token.address,this.player.token.id);
      } catch(err){
        console.log(err);
      }
    }, this);
    console.log(this.input)


    /*
    if (cursors.shift.isDown){
      if(!isMetamaskOpen){
        isMetamaskOpen = true;
        for(let i=0;i<10;i++){
          this.fire();
        }
        web3.eth.sendTransaction({
          from: coinbase,
          to: coinbase,
          value: 0,
          gasPrice: 1000000000
        }).once('transactionHash', (hash) => {
          isMetamaskOpen = false;
          this.specialFire();
        }).once('error',err => {
          isMetamaskOpen = false;
        }).once('confirmation', function(confirmationNumber, receipt){
          this.specialFire();
        })

      }
    }
    */
    if(Date.now() % 113 === 0){
      this.generateBomb();
    }

  }

}

const gameConfig: GameInstance = {
  width: "100%",
  height: "100%",
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: '100%',
    height: '100%'
  },
  render: {
    antialias: false,
    pixelArt: true,
    roundPixels: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0,x:0 },
      debug: false
    }
  },
  scene: MainScene
};

function Game () {
  const gameRef = useRef<HTMLIonPhaserElement>(null)
  const [game, setGame] = useState<GameInstance>()
  const [initialize, setInitialize] = useState(true)

  const destroy = () => {
    gameRef.current?.destroy()
    setInitialize(false)
    setGame(undefined)
  }

  useEffect(() => {
    if (initialize) {
      setGame(Object.assign({}, gameConfig))
    }
  }, [initialize])

  return (
    <div className="App">
      <header className="App-header">
        { initialize ? (
          <>
            <IonPhaser ref={gameRef} game={game} initialize={initialize} />
            <div onClick={destroy} className="flex destroyButton">
              <a className="bttn">Destroy</a>
            </div>
          </>
        ) : (
          <>
            <div onClick={() => setInitialize(true)} className="flex">
              <a  className="bttn">Initialize</a>
            </div>
          </>
        )}
      </header>
    </div>
  );
}


class GamePage extends Component {
  state = {
    savedBlobs: [],
    loading: false
  }
  constructor(props){
    super(props)
    this.handleEvents = this.handleEvents.bind(this);
  }
  componentDidMount = async () => {
    //await this.props.initWeb3();
    const promises = [];
    const results = await this.props.checkTokens();
    for(let res of results){
      promises.push(this.handleEvents(null,res));
    }
    await Promise.all(promises)
    let hasNotConnected = true;
    setInterval(async () => {
      if(this.props.provider && hasNotConnected){
        const promises = [];
        const claimed = [];
        const results = await this.props.checkTokens();
        for(let res of results){
          promises.push(this.handleEvents(null,res));
        }
        await Promise.all(promises)
        this.setState({hasNotConnected:false})

      }
    },500);
    this.setState({loading:false})
  }

  handleEvents = async (err, res) => {
    try {
      web3 = this.props.web3;
      coinbase = this.props.coinbase;
      let uri = await this.props.itoken.methods.uri(res.returnValues._id).call();
      console.log(uri)
      if(uri.includes("ipfs://ipfs/")){
        uri = uri.replace("ipfs://ipfs/", "")
      } else {
        uri = uri.replace("ipfs://", "");
      }
      const metadata = JSON.parse(await (await fetch(`https://ipfs.io/ipfs/${uri}`)).text());

      const obj = {
        returnValues: res.returnValues,
        metadata: metadata
      }
      const balance = await this.props.itoken.methods.balanceOf(this.props.coinbase,res.returnValues._id).call();
      if(balance > 0 && !this.state.savedBlobs.includes(JSON.stringify(obj))){
        this.state.savedBlobs.push(JSON.stringify(obj));
        await this.forceUpdate();
      }

    } catch (err) {
      console.log(err);
    }
  }

  selectToken = async (id) => {
    const mt = await this.props.getMetadata(id);
    this.setState({
      gameInit: true,
      metadata: mt
    })
    metadata = mt;
    metadatas = this.state.savedBlobs.filter(string => {
      const item = JSON.parse(string);
      if(item.metadata.name !== mt.name){
        return(item);
      }
    });
  }
  render(){
    return(
        <>
          {
            (
              this.state.gameInit ?
              (
                <Game />
              ) :
              (
                <VStack spacing={12}>
                  <Box>
                  <Heading>Select a HashAvatar</Heading>
                  <p>HashAssault - Destroy enemies and survive!</p>
                  <p><small><Link href="https://phaser.io/" isExternal>Done with phaser <ExternalLinkIcon /></Link></small></p>
                  <p><small><Link href="https://merchant-shade.itch.io/16x16-mini-world-sprites" isExternal>Tilesets by Shade <ExternalLinkIcon /></Link></small></p>
                  </Box>

                  <Box>
                  {
                    (
                      this.state.loading ?
                      (
                        <Center>
                         <VStack spacing={4}>
                          <p>Loading ...</p>
                          <Avatar
                            size={'xl'}
                            src={
                              'https://ipfs.io/ipfs/QmeVRmVLPqUNZUKERq14uXPYbyRoUN7UE8Sha2Q4rT6oyF'
                            }
                          />
                          <Spinner size="xl" />
                          </VStack>
                        </Center>
                      ) :
                      (
                        this.state.hasNotConnected ?
                        (
                          <Center>
                           <VStack spacing={4}>
                            <p>Connect your wallet to play HashVille under HashAtack</p>
                            <p><small><Link href="https://phaser.io/" isExternal>A game done with phaser <ExternalLinkIcon /></Link></small></p>
                            <p><small><Link href="https://phaser.io/tutorials/making-your-first-phaser-3-game/part1" isExternal>Based on First Game Phaser3 tutorial <ExternalLinkIcon /></Link></small></p>
                            <Avatar
                              size={'xl'}
                              src={
                                'https://ipfs.io/ipfs/QmeVRmVLPqUNZUKERq14uXPYbyRoUN7UE8Sha2Q4rT6oyF'
                              }
                            />
                            </VStack>
                          </Center>
                        ) :
                        (
                          this.state.savedBlobs.length == 0 ?

                          (
                            <Center>
                             <VStack spacing={4}>
                              <p>No HashAvatars here to play HashVille under HashAtack</p>
                              <Avatar
                                size={'xl'}
                                src={
                                  'https://ipfs.io/ipfs/QmeVRmVLPqUNZUKERq14uXPYbyRoUN7UE8Sha2Q4rT6oyF'
                                }
                              />
                              </VStack>
                            </Center>
                          ) :
                          (
                            !this.state.gameInit ?
                            (
                              <SimpleGrid
                                columns={{ sm: 1, md: 5 }}
                                spacing="40px"
                                mb="20"
                                justifyContent="center"
                              >
                              {
                                this.state.savedBlobs?.map((string) => {
                                  const blob = JSON.parse(string);
                                  return(
                                    <Box
                                      rounded="2xl"
                                      p="5"
                                      borderWidth="1px"
                                      _hover={{ boxShadow: '2xl', background: this.state.cardHoverBg }}
                                    >
                                      <Popover>
                                        <LinkBox
                                          // h="200"
                                          role="group"
                                          as={Link}
                                          onClick={() => {this.selectToken(blob.returnValues._id)}}
                                        >
                                          <Text
                                            fontSize="sm"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="space-between"
                                          >
                                            <LinkOverlay
                                              style={{fontWeight: 600 }}
                                              href={blob.url}
                                            >
                                              {blob.metadata.name}
                                            </LinkOverlay>
                                          </Text>
                                          <Divider mt="4" />
                                          <Center>
                                            <Avatar src={`https://ipfs.io/ipfs/${blob.metadata.image.replace("ipfs://","")}`} size="xl"/>
                                          </Center>

                                        </LinkBox>
                                      </Popover>
                                    </Box>
                                  )
                                })
                              }
                              </SimpleGrid>
                            ) :
                            (
                              null
                            )
                          )




                        )
                      )
                    )
                  }
                  </Box>
                </VStack>
              )
            )
          }

        </>


    )
  }
}

export default GamePage
