"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var facialHair_1 = require("./facialHair");
var HairColor_1 = require("./HairColor");
var LongHairDreads = /** @class */ (function (_super) {
    __extends(LongHairDreads, _super);
    function LongHairDreads() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = 'react-mask-LongHairDreads-1';
        _this.mask2 = 'react-mask-LongHairDreads-2';
        _this.path1 = 'react-path-LongHairDreads-1';
        _this.path2 = 'react-path-LongHairDreads-2';
        return _this;
    }
    LongHairDreads.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { d: 'M85.718098,185.073467 C86.8059563,185.024663 87.900098,185 89,185 L89,185 L93,185 L93,166.610951 C81.2286384,161.018987 71.7176526,151.441235 66.2110974,139.621749 C63.4467803,131.013632 63.6113966,121.686985 63.000708,112.826222 C62.1957105,101.145772 62.8887367,89.7481762 65.5369124,78.2476834 C67.9263583,67.8722634 71.3610508,62.3068417 79.1631677,53.9925443 C83.5224388,49.3467459 90.0678681,49.0779432 96.5828586,47.4293172 C103.17612,45.7598396 109.194306,43.2191332 113.317676,38.4387068 C122.400941,48.8499369 146.671683,45.1030183 155.554378,56.4493915 C166.355804,70.2471725 166.476604,79.1499376 167.747424,95.0917937 C168.700138,107.043152 167.218859,128.656014 166.803718,141.630125 C161.185514,152.525228 152.097197,161.339247 141,166.610951 L141,185 L145,185 C151.635699,185 158.061736,185.89767 164.1633,187.578199 C162.113115,190.752042 159.66929,193.757151 157.112045,196.551224 C153.280561,200.738743 149.430596,205.07041 145.111547,208.917959 C140.170678,213.319433 135.443967,216.514694 132.444114,221.999991 C131.086326,224.482676 128.707208,227.093643 131.224932,229.817026 C133.524148,232.304244 137.149083,231.79157 139.609734,229.99245 C143.247171,227.332528 145.947527,223.133676 149.2996,220.076669 C146.062216,225.891963 141.557817,234.561189 143.870623,241.081807 C144.65714,243.298862 145.455615,243.254893 146.671536,244.732627 C148.591355,244.77569 149.350151,245.644199 148.948467,247.337701 C149.128382,247.821818 149.308297,248.305028 149.488756,248.789145 C150.944383,251.382887 153.73062,253.199684 157.268587,251.977153 C168.828809,247.982737 155.493353,230.015568 168.22112,224.674872 C170.498594,227.504326 167.135107,235.453723 167.044334,238.930932 C166.932906,243.218176 167.166089,252.943574 173.685972,254.109896 C182.182202,255.630241 178.905139,247.513126 179.240509,244.059941 C179.630235,240.043766 182.101213,234.747946 184.111805,231.19141 C182.888817,234.970512 180.603189,243.344644 186.927937,245.060811 C194.245208,247.046687 193.409228,238.475373 194.5197,234.910224 C194.748535,240.185647 201.565196,252.659813 207.724704,242.806586 C210.898493,237.730613 208.733533,229.366 208.385661,223.95323 C212.799287,228.512903 216.32584,222.602417 216.224196,219.322843 C217.902135,224.075166 224.207315,237.325369 229.795009,226.807615 C233.19274,220.412559 229.568892,211.82266 227.311529,205.648358 C233.255792,206.168285 232.061613,200.411919 231.17617,197.553001 C229.869476,193.331485 230.56685,192.711833 230.835907,188.347077 C239.08591,193.151981 238.833159,180.113465 238.377664,176.915484 C237.232404,168.863643 230.969077,161.653567 226.135287,154.862787 C222.669068,149.991702 216.20028,141.510593 218.096726,135.636824 C220.053506,138.105004 224.604107,138.079166 226.413041,135.494944 C227.944765,133.306899 226.321725,129.699141 225.582497,127.51291 C223.561578,121.532617 219.523001,117.668749 215.871976,112.532035 C208.763972,102.531035 209.78639,89.3991407 209.129238,78.2191259 C208.309564,64.2703984 205.315147,50.5387982 192.648801,40.3918378 C185.862036,34.9554966 177.590835,30.4783232 171.278589,24.7101717 C169.557166,23.1372455 168.829352,21.1885396 167.213378,19.672275 C165.399552,17.9706136 164.553244,18.373591 163.055221,15.951194 C160.386934,11.6367527 157.252824,7.59700681 150.804147,7.39438491 C146.585112,7.26247669 141.249081,10.823092 137.446405,10.3027118 C134.324254,9.87616325 132.352254,5.42437419 129.78996,3.93032097 C125.824219,1.61762086 123.056462,2.51559399 118.817859,3.85507435 C112.508874,5.8486563 108.488235,6.54355423 102.06293,4.16059373 C97.6906135,2.53871192 93.5645254,-0.846479064 88.4018873,0.357013447 C84.3524397,1.30167574 82.5435053,4.56991717 80.1584078,7.07481345 C77.6972133,9.66084915 78.8865008,8.80593884 75.2887432,9.38026087 C71.6083661,9.9681817 68.7020041,10.5017074 65.9103313,12.9118655 C61.397779,16.8074642 64.5237352,22.8666297 60.95696,26.3007763 C59.0317058,28.154744 55.0219374,29.0377585 52.7922952,30.954734 C50.3582782,33.0471337 48.3677981,35.5901066 46.5441878,38.0655389 C42.992632,42.8881215 40.5678554,48.1435988 37.9642508,53.3460408 C33.1206766,63.0274694 28.8027153,73.0171372 26.9622549,83.4183949 C26.0170215,88.7645307 24.4238764,93.9946236 23.4503783,99.3303337 C22.6997357,103.444873 23.0198867,107.95151 21.5539323,111.946834 C19.8145722,116.686464 15.6553275,121.042608 13.4023127,125.704271 C10.4144183,131.887186 8.40763163,137.818976 7.77222166,144.475128 C7.14822625,151.019317 8.88486854,156.786109 9.65073052,163.202016 C10.0942673,166.919017 9.32731826,167.341033 6.77100254,170.849066 C4.80389503,173.548878 2.81124068,176.221946 1.54639979,179.227278 C-0.815325022,184.841763 -0.684329469,190.304395 3.42490864,195.240301 C6.24484612,198.627758 15.7238148,202.173415 14.9476254,194.622463 C14.5872518,191.114429 10.1763434,189.527451 11.0188459,185.502664 C11.6020751,182.715366 14.443211,180.786605 17.8920358,179.924895 C20.328227,179.316576 21.5278419,179.343321 22.6269,182.014575 C23.6232272,184.435613 22.3024007,189.72146 21.996382,192.265793 C21.8735397,193.288422 21.691994,194.184582 21.5686081,195.131511 C20.7005588,201.806248 20.5407551,207.947459 16.8870119,214.076432 C14.6426939,217.842389 10.2513533,223.149088 15.258536,226.778604 C19.2177543,229.649308 26.0490909,227.900051 29.1359115,224.896532 C32.3923196,228.923586 31.668311,233.320073 30.4502154,237.765516 C29.6941373,240.525616 27.6264731,244.567629 30.8812505,246.798736 C35.2888976,249.820386 42.4838692,245.061265 45.7886533,242.659719 C47.6992316,246.926565 49.4918595,262.485842 57.0243756,253.211017 C59.2224919,250.505765 62.8816706,247.867147 63.5785017,244.677325 C64.7346326,239.386945 63.9046317,233.818695 64.3834993,228.474826 C66.7870774,235.472308 68.4211208,238.262053 69.8925107,245.444931 C70.7774101,249.766172 71.124195,264.264472 80.0666799,262.354749 C86.9474795,260.885627 82.5468986,251.830921 81.6679782,248.139757 C79.9846038,241.070655 79.1724081,238.077382 77.5455629,230.999667 C80.078506,235.625521 82.2918416,240.371497 84.725315,245.034067 C87.115848,249.613685 97.8039252,259.060923 100.930715,255.083614 C104.057505,251.106306 96.435013,245.438857 94.7010885,240.623528 C91.0924599,230.599863 86.7201436,220.618354 85.6835937,210.116466 C85.1851583,205.067237 86.1200644,200.404213 86.5299011,195.413459 C86.8096981,192.003861 86.3887166,188.510775 85.718098,185.073467 Z', id: path2 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Long-Hair/Dreads', mask: "url(#" + mask2 + ")" },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("g", { id: 'template-for-hairstyles', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(63.000000, 87.000000)' }),
                    React.createElement(facialHair_1.default, null),
                    React.createElement("g", { id: 'Hair', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(16.000000, 14.000000)' },
                        React.createElement("mask", { id: mask1, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement("use", { id: 'No-Woman', fill: '#8D5A5A', xlinkHref: '#' + path2 }),
                        React.createElement(HairColor_1.default, { maskID: mask1 }),
                        React.createElement("path", { d: 'M85.718098,185.073467 C86.8059563,185.024663 87.900098,185 89,185 L89,185 L93,185 L93,166.610951 C81.2286384,161.018987 71.7176526,151.441235 66.2110974,139.621749 C66.7437304,141.280375 67.3851037,142.912325 68.1617154,144.509125 C73.916823,156.341882 81.4183567,166.92083 84.4877837,179.589912 C84.9233139,181.387079 85.3569126,183.222183 85.718098,185.073467 Z M164.1633,187.578199 C158.061736,185.89767 151.635699,185 145,185 L145,185 L141,185 L141,166.610951 C151.900717,161.432585 160.863061,152.836228 166.502046,142.206866 C166.424719,145.200638 166.492065,148.178617 166.874747,151.055581 C167.944997,159.099715 170.876362,166.366 169.515856,174.635875 C168.770949,179.167686 166.790265,183.511457 164.1633,187.578199 Z', id: 'Shadows', fillOpacity: '0.24', fill: '#000000', mask: "url(#" + mask1 + ")" }),
                        React.createElement("path", { d: 'M49.3607552,108.248307 C49.2357387,105.826133 47.3806025,97.711311 49.6885159,96.3093564 C52.2181977,94.7715832 51.6909542,104.01582 51.7170446,104.962941 C51.7605286,106.500263 52.928074,118.098087 50.7897482,118.046647 C48.6579451,117.995659 49.4428313,109.828495 49.3607552,108.248307 Z M57.7950752,165.998415 C57.7863784,167.012316 56.722651,166.95095 55.9633116,166.68563 C55.0256879,166.358041 55.5996767,164.201639 55.5502136,163.49457 C55.4197616,161.635525 54.5272525,156.156756 55.8904759,154.62169 C58.6158357,151.553363 57.8059462,164.569838 57.7950752,165.998415 Z M32.1210881,179.161492 C34.0501471,179.106894 32.2645853,141.329473 29.29952,141.371437 C27.2171799,141.400766 30.6611128,179.198041 32.1210881,179.161492 Z M34.3531219,198.516092 C31.9555228,198.516092 32.3963419,206.978357 33.8084848,207.654742 C35.9484412,208.679924 37.0349977,198.516092 34.3531219,198.516092 Z M49.5898072,202.054956 C49.6110057,203.112626 48.4113908,203.129321 47.6107416,202.798574 C46.701926,202.423155 47.082411,199.293461 47.0465367,198.598576 C46.9334783,196.41149 45.0299661,187.926664 46.7611729,186.367683 C48.7353466,184.59031 48.7782871,186.540953 49.3093354,187.8662 C50.8731288,191.768841 49.505557,197.898275 49.5898072,202.054956 Z M190.242397,122.33319 C190.352194,123.795609 191.311016,133.35074 189.717871,134.079016 C186.975661,135.332969 188.156795,129.428696 188.167666,128.666127 C188.274745,121.229044 187.19906,113.85423 186.381017,106.456855 C186.225562,105.052193 183.755671,94.2318284 185.564605,93.3352452 C188.272028,91.9937546 187.86817,95.5809897 188.023082,96.7451491 C189.152035,105.213731 189.651014,113.824449 190.242397,122.33319 Z M187.023004,155.587221 C184.490605,155.085459 183.16543,163.680835 184.321017,164.602687 C186.238118,166.132789 189.670093,156.113348 187.023004,155.587221 Z M186.754925,193.385172 C185.616188,193.158658 177.321615,209.117567 178.004314,210.020016 C179.303942,211.738731 190.833725,194.199633 186.754925,193.385172 Z M166.332555,200.758587 C164.551342,199.95631 156.998715,211.509915 158.926686,212.377619 C160.674743,213.163653 168.488275,201.725562 166.332555,200.758587 Z M208.425286,157.447168 C206.274459,157.447168 206.370123,169.269251 208.025233,170.015125 C209.736329,170.785817 210.967469,157.447168 208.425286,157.447168 Z M178.139603,48.8435128 C177.531371,47.9735519 170.964743,40.2233192 175.668081,41.3306242 C177.959145,41.8698375 181.116083,48.6833281 182.149372,50.7413632 C182.743472,51.9235715 186.133593,57.2006425 182.541271,56.8270286 C181.563968,56.7259543 178.951667,50.0063184 178.139603,48.8435128 Z M155.04775,33.3564939 C154.201443,33.7373274 154.215575,34.0946972 155.090147,34.4281522 C155.936998,34.0473186 155.922322,33.6904 155.04775,33.3564939 Z M70.6188876,41.486432 C68.6137316,43.3296843 61.07578,54.0047545 58.4928303,54.1116947 C53.7862308,54.3066237 62.7711125,45.0867526 63.7902688,43.9135688 C64.2452201,43.387441 66.275923,40.8222295 67.5119557,40.1914176 C68.7729918,39.5475202 72.9556091,39.3322861 70.6188876,41.486432 Z M43.2540252,69.9805849 C41.0711283,69.5519216 37.4190158,80.245492 38.693097,81.5359942 C40.6167205,83.4857354 45.7005438,70.4661025 43.2540252,69.9805849 Z M68.1928608,188.992366 C68.6054153,190.333405 72.8244505,200.071733 71.7639844,201.353211 C70.1425747,203.310623 69.6772959,200.536495 69.1467911,199.385872 C67.9689182,196.830588 64.9087316,190.540066 65.4006444,187.850317 C65.8784249,185.241788 67.775958,187.648619 68.1928608,188.992366 Z M59.986234,211.816206 C57.6913658,211.816206 57.9560747,221.618156 59.3225594,222.200687 C61.4391432,223.102685 62.8012795,211.816206 59.986234,211.816206 Z M221.791072,203.446532 C221.927503,204.049819 223.845148,209.009228 221.128485,208.290879 C219.566322,207.878008 219.325529,203.506094 218.926564,202.180847 C217.697597,198.095009 213.646519,193.018282 213.294842,188.98659 C212.955123,185.090266 215.135302,186.575246 216.80998,189.875503 C219.046145,194.283064 220.722996,198.746577 221.791072,203.446532 Z M202.089015,202.950817 C199.957212,202.941341 199.853937,213.724254 201.187265,214.35281 C203.051098,215.231344 204.808395,202.950817 202.089015,202.950817 Z M208.249611,114.654432 C209.831341,114.242012 204.839921,101.328868 203.071753,101.471004 C200.377376,101.688494 205.847663,115.273512 208.249611,114.654432 Z M181.434114,170.746831 C180.587263,171.127665 180.601939,171.485034 181.476511,171.818489 C182.322818,171.437656 182.308686,171.080286 181.434114,170.746831 Z M157.216135,225.987499 C158.009718,225.987499 158.337478,224.763778 157.165041,224.736253 C156.389939,224.742571 155.980645,225.987499 157.216135,225.987499 Z M58.6844317,170.628746 C58.7137834,168.720066 56.215084,170.119764 56.230847,171.730185 C56.26346,174.943806 58.6317074,173.476424 58.6844317,170.628746 Z M52.5187808,122.883143 C51.7148704,122.883143 51.3854791,124.119498 52.5698745,124.148828 C53.3536737,124.142962 53.7673152,122.883143 52.5187808,122.883143 Z M33.3865269,185.392722 C33.3087993,183.451554 31.6863025,185.43604 31.7770753,185.438747 C32.0651568,185.445967 33.4474045,186.856043 33.3865269,185.392722 Z M37.5995831,84.0632577 C35.2318792,84.0632577 35.5754028,89.8168218 37.0864719,90.1859235 C39.6063697,90.801845 39.9509805,84.0632577 37.5995831,84.0632577 Z M50.212933,208.325849 C47.9273051,208.325849 47.7729369,216.139704 49.3503191,216.625673 C51.8011861,217.379669 52.5931385,208.325849 50.212933,208.325849 Z M31.4567613,213.932223 C30.5849071,214.323435 30.5990394,214.691634 31.4991582,215.035467 C32.371556,214.644256 32.3568801,214.276959 31.4567613,213.932223 Z M201.455507,217.282881 C199.135636,217.282881 199.226409,226.836207 200.65051,227.481458 C202.64099,228.383907 204.139014,217.282881 201.455507,217.282881 Z M177.94561,226.161536 C175.534966,225.679629 174.272299,233.567034 175.395817,234.451885 C177.248236,235.910694 180.42148,226.656078 177.94561,226.161536 Z M157.46508,233.451204 C155.467534,233.451204 155.95836,237.025805 157.110686,237.557799 C159.104971,238.478297 159.694179,233.451204 157.46508,233.451204 Z M86.479514,19.5090896 C84.8080977,19.5090896 74.3192131,24.2532644 78.2392958,25.6588288 C80.6358078,26.5179603 90.7371413,19.5090896 86.479514,19.5090896 Z', id: 'Highlights', fillOpacity: '0.300000012', fill: '#FFFFFF', mask: "url(#" + mask1 + ")" })),
                    this.props.children,
                    React.createElement("g", { id: 'Group-74', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(44.000000, 33.000000)' })))));
    };
    LongHairDreads.optionValue = 'LongHairDreads';
    return LongHairDreads;
}(React.Component));
exports.default = LongHairDreads;
