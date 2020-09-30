import Scene from "../canvasComponents/Scene";
import SceneObject from "../canvasComponents/SceneObject";
import Shape from "../canvasComponents/Shape";
import { Vector2 } from "../Util";
import Art from "../canvasComponents/Art";
import PoetryObjectLineByLine from "../canvasComponents/PoetryObjectLineByLine";

export function Art4(): Art {
  let art = new Art();

  art.title = "Holy lights";
  art.sound = {
    'bgMusic': '/music/Rift Mysterious Background Music No Copyright.mp3',
  }
  art.publicProperties = {
    'Crystal color': "aqua",
    'Light color': "rgba(255, 255, 245, 0.5)",
    'Camera sensitivity (max 10)': "1",
  }

  const poetryUrl = "https://poetrydb.org/title/TO%20A%20CHILD/lines.json";

  art.createScene = (ctx: CanvasRenderingContext2D) => {
    art.playSound("bgMusic", true);
    art.scene = new Scene(ctx);

    // Define basic variables
    let lightColor = art.publicProperties['Light color'];
    let crystalColor = art.publicProperties['Crystal color'];
    let cameraSensitivity = art.publicProperties["Camera sensitivity (max 10)"];

    // Draw shapes
    const background = new Shape(ctx);
    background.draw = () => {
      ctx.save();
      ctx.fillStyle = "rgb(40, 40, 50)";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(1000, 0);
      ctx.bezierCurveTo(1000, 0, 1000, 0, 1000, 0);
      ctx.lineTo(1000, 1000);
      ctx.bezierCurveTo(1000, 1000, 1000, 1000, 1000, 1000);
      ctx.lineTo(0, 1000);
      ctx.bezierCurveTo(0, 1000, 0, 1000, 0, 1000);
      ctx.lineTo(0, 0);
      ctx.bezierCurveTo(0, 0, 0, 0, 0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    const cave1 = new Shape(ctx);
    cave1.draw = () => {
      ctx.save();
      ctx.fillStyle = "#453535";
      ctx.beginPath();
      ctx.moveTo(-50, 333.6);
      ctx.lineTo(62, 329.6);
      ctx.lineTo(120, 341.6);
      ctx.lineTo(172, 341.6);
      ctx.lineTo(252, 335.6);
      ctx.lineTo(256, 393.6);
      ctx.lineTo(268, 335.6);
      ctx.lineTo(370, 343.6);
      ctx.lineTo(396, 405.6);
      ctx.lineTo(396, 477.6);
      ctx.lineTo(380, 533.6);
      ctx.lineTo(298, 543.6);
      ctx.lineTo(192, 533.6);
      ctx.lineTo(188, 533.6);
      ctx.lineTo(112, 543.6);
      ctx.lineTo(-66, 559.6);
      ctx.lineTo(-40, 1021.6);
      ctx.lineTo(1034, 1021.6);
      ctx.lineTo(1032, 593.6);
      ctx.lineTo(942, 591.6);
      ctx.lineTo(874, 567.6);
      ctx.lineTo(776, 561.6);
      ctx.lineTo(660, 581.6);
      ctx.lineTo(584, 547.6);
      ctx.lineTo(446, 533.6);
      ctx.lineTo(414, 429.6);
      ctx.lineTo(434, 341.6);
      ctx.lineTo(528, 331.6);
      ctx.lineTo(530, 373.6);
      ctx.lineTo(542, 325.6);
      ctx.lineTo(622, 325.6);
      ctx.lineTo(634, 393.6);
      ctx.lineTo(638, 325.6);
      ctx.lineTo(708, 347.6);
      ctx.lineTo(796, 339.6);
      ctx.lineTo(906, 327.6);
      ctx.lineTo(916, 389.6);
      ctx.lineTo(922, 319.6);
      ctx.lineTo(1038, 317.6);
      ctx.lineTo(1044, -28.4);
      ctx.lineTo(-46, -36.4);
      ctx.lineTo(-50, 333.6);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      let g = ctx.createLinearGradient(-50, 285.6, -50, 817.6);
      g.addColorStop(0, "rgba(255, 255, 255, 0)");
      g.addColorStop(1, "rgba(209, 209, 209, 0.6)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(-50, 285.6);
      ctx.lineTo(1034, 285.6);
      ctx.bezierCurveTo(1034, 285.6, 1034, 285.6, 1034, 285.6);
      ctx.lineTo(1034, 817.6);
      ctx.bezierCurveTo(1034, 817.6, 1034, 817.6, 1034, 817.6);
      ctx.lineTo(-50, 817.6);
      ctx.bezierCurveTo(-50, 817.6, -50, 817.6, -50, 817.6);
      ctx.lineTo(-50, 285.6);
      ctx.bezierCurveTo(-50, 285.6, -50, 285.6, -50, 285.6);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    const light1 = new Shape(ctx);
    light1.draw = () => {
      ctx.save();
      var g = ctx.createRadialGradient(500, 500, 0, 500, 500, 500);
      g.addColorStop(0, lightColor);
      g.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(1000, 0);
      ctx.bezierCurveTo(1000, 0, 1000, 0, 1000, 0);
      ctx.lineTo(1000, 1000);
      ctx.bezierCurveTo(1000, 1000, 1000, 1000, 1000, 1000);
      ctx.lineTo(0, 1000);
      ctx.bezierCurveTo(0, 1000, 0, 1000, 0, 1000);
      ctx.lineTo(0, 0);
      ctx.bezierCurveTo(0, 0, 0, 0, 0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    const cave2 = new Shape(ctx);
    cave2.draw = () => {
      ctx.save();
      ctx.fillStyle = "#593B3B";
      ctx.beginPath();
      ctx.moveTo(1174.72, 651.21);
      ctx.lineTo(974.72, 643.21);
      ctx.lineTo(872.72, 631.21);
      ctx.lineTo(786.72, 637.21);
      ctx.lineTo(720.72, 663.21);
      ctx.lineTo(582.72, 663.21);
      ctx.lineTo(510.72, 629.21);
      ctx.lineTo(432.72, 603.21);
      ctx.lineTo(330.72, 593.21);
      ctx.lineTo(216.72, 597.21);
      ctx.lineTo(150.72, 507.21);
      ctx.lineTo(132.72, 417.21);
      ctx.lineTo(160.72, 317.21);
      ctx.lineTo(210.72, 261.21);
      ctx.lineTo(312.72, 239.21);
      ctx.lineTo(324.72, 323.21);
      ctx.lineTo(332.72, 239.21);
      ctx.lineTo(386.72, 235.21);
      ctx.lineTo(394.72, 299.21);
      ctx.lineTo(406.72, 233.21);
      ctx.lineTo(482.72, 253.21);
      ctx.lineTo(584.72, 235.21);
      ctx.lineTo(602.72, 357.21);
      ctx.lineTo(610.72, 233.21);
      ctx.lineTo(624.72, 293.21);
      ctx.lineTo(630.72, 237.21);
      ctx.lineTo(686.72, 225.21);
      ctx.lineTo(756.72, 219.21);
      ctx.lineTo(780.72, 277.21);
      ctx.lineTo(786.72, 219.21);
      ctx.lineTo(880.72, 219.21);
      ctx.lineTo(882.72, 351.21);
      ctx.lineTo(894.72, 235.21);
      ctx.lineTo(950.72, 247.21);
      ctx.lineTo(1080.72, 239.21);
      ctx.lineTo(1170.72, 231.21);
      ctx.lineTo(1172.72, -170.79);
      ctx.lineTo(-203.28, -168.79);
      ctx.lineTo(-189.28, 1141.21);
      ctx.lineTo(1178.72, 1127.21);
      ctx.lineTo(1174.72, 651.21);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.fillStyle = "#38608F";
      ctx.beginPath();
      ctx.moveTo(690.72, 685.21);
      ctx.lineTo(634.72, 717.21);
      ctx.lineTo(578.72, 733.21);
      ctx.lineTo(544.72, 745.21);
      ctx.lineTo(602.72, 753.21);
      ctx.lineTo(636.72, 775.21);
      ctx.lineTo(602.72, 793.21);
      ctx.lineTo(630.72, 817.21);
      ctx.lineTo(652.72, 825.21);
      ctx.lineTo(648.72, 799.21);
      ctx.lineTo(692.72, 777.21);
      ctx.lineTo(752.72, 781.21);
      ctx.lineTo(780.72, 763.21);
      ctx.lineTo(738.72, 753.21);
      ctx.lineTo(754.72, 735.21);
      ctx.lineTo(724.72, 717.21);
      ctx.lineTo(686.72, 707.21);
      ctx.lineTo(690.72, 685.21);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      var g = ctx.createLinearGradient(-66.89253299798943, -92.78999314453125, 997.5974670020106, -92.78999314453125);
      g.addColorStop(0, "rgba(230, 230, 230, 0)");
      g.addColorStop(1, "rgba(191, 191, 191, 0.1)");
      ctx.fillStyle = g;
      ctx.rotate(1.223770766291612);
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(-10000, -10000);
      ctx.lineTo(20000, -10000);
      ctx.bezierCurveTo(20000, -10000, 20000, -10000, 20000, -10000);
      ctx.lineTo(20000, 20000);
      ctx.bezierCurveTo(20000, 20000, 20000, 20000, 20000, 20000);
      ctx.lineTo(-10000, 20000);
      ctx.bezierCurveTo(-10000, 20000, -10000, 20000, -10000, 20000);
      ctx.lineTo(-10000, -10000);
      ctx.bezierCurveTo(-10000, -10000, -10000, -10000, -10000, -10000);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    const light2 = new Shape(ctx);
    light2.draw = () => {
      ctx.save();
      const g = ctx.createRadialGradient(500, 500, 0, 500, 500, 500);
      g.addColorStop(0, lightColor);
      g.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(1000, 0);
      ctx.bezierCurveTo(1000, 0, 1000, 0, 1000, 0);
      ctx.lineTo(1000, 1000);
      ctx.bezierCurveTo(1000, 1000, 1000, 1000, 1000, 1000);
      ctx.lineTo(0, 1000);
      ctx.bezierCurveTo(0, 1000, 0, 1000, 0, 1000);
      ctx.lineTo(0, 0);
      ctx.bezierCurveTo(0, 0, 0, 0, 0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    const cave3 = new Shape(ctx);
    cave3.draw = () => {
      ctx.save();
      ctx.fillStyle = "#523230";
      ctx.beginPath();
      ctx.moveTo(-245.28, 583.21);
      ctx.lineTo(-15.28, 599.21);
      ctx.lineTo(108.72, 671.21);
      ctx.lineTo(284.72, 671.21);
      ctx.lineTo(426.72, 775.21);
      ctx.lineTo(538.72, 811.21);
      ctx.lineTo(672.72, 823.21);
      ctx.lineTo(712.72, 749.21);
      ctx.lineTo(806.72, 671.21);
      ctx.lineTo(902.72, 653.21);
      ctx.lineTo(916.72, 527.21);
      ctx.lineTo(942.72, 373.21);
      ctx.lineTo(940.72, 291.21);
      ctx.lineTo(962.72, 225.21);
      ctx.lineTo(862.72, 129.21);
      ctx.lineTo(850.72, 187.21);
      ctx.lineTo(844.72, 121.21);
      ctx.lineTo(720.72, 95.21);
      ctx.lineTo(704.72, 227.21);
      ctx.lineTo(688.72, 95.21);
      ctx.lineTo(584.72, 121.21);
      ctx.lineTo(528.72, 199.21);
      ctx.lineTo(440.72, 195.21);
      ctx.lineTo(400.72, 169.21);
      ctx.lineTo(370.72, 107.21);
      ctx.lineTo(278.72, 117.21);
      ctx.lineTo(134.72, 131.21);
      ctx.lineTo(102.72, 257.21);
      ctx.lineTo(82.72, 145.21);
      ctx.lineTo(-101.28, 207.21);
      ctx.lineTo(-271.28, 207.21);
      ctx.lineTo(-273.28, -204.79);
      ctx.lineTo(1224.72, -196.79);
      ctx.lineTo(1250.72, 1215.21);
      ctx.lineTo(-255.28, 1193.21);
      ctx.lineTo(-245.28, 583.21);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      ctx.save();
      const g = ctx.createLinearGradient(-181.28, -170.79, 716.7520000000001, 700.098);
      g.addColorStop(0.304, "rgba(255, 255, 255, 0)");
      g.addColorStop(0.695818, "rgba(196, 196, 196, 0.06)");
      ctx.fillStyle = g;
      ctx.rotate(0.5145422621097003);
      ctx.beginPath();
      ctx.moveTo(-10000, -10000);
      ctx.lineTo(20000, -10000);
      ctx.bezierCurveTo(20000, -10000, 20000, -10000, 20000, -10000);
      ctx.lineTo(20000, 20000);
      ctx.bezierCurveTo(20000, 20000, 20000, 20000, 20000, 20000);
      ctx.lineTo(-10000, 20000);
      ctx.bezierCurveTo(-10000, 20000, -10000, 20000, -10000, 20000);
      ctx.lineTo(-10000, -10000);
      ctx.bezierCurveTo(-10000, -10000, -10000, -10000, -10000, -10000);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = g;
      ctx.transform(1, 0, 0, 1.20035, 0, 38.2245);
      ctx.beginPath();
      ctx.moveTo(-181.28, -170.79);
      ctx.lineTo(1230.72, -170.79);
      ctx.bezierCurveTo(1230.72, -170.79, 1230.72, -170.79, 1230.72, -170.79);
      ctx.lineTo(1230.72, 937.21);
      ctx.bezierCurveTo(1230.72, 937.21, 1230.72, 937.21, 1230.72, 937.21);
      ctx.lineTo(-181.28, 937.21);
      ctx.bezierCurveTo(-181.28, 937.21, -181.28, 937.21, -181.28, 937.21);
      ctx.lineTo(-181.28, -170.79);
      ctx.bezierCurveTo(-181.28, -170.79, -181.28, -170.79, -181.28, -170.79);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    const light3 = new Shape(ctx);
    light3.draw = () => {
      ctx.save();
      const g = ctx.createRadialGradient(500, 500, 0, 500, 500, 500);
      g.addColorStop(0, lightColor);
      g.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(1000, 0);
      ctx.bezierCurveTo(1000, 0, 1000, 0, 1000, 0);
      ctx.lineTo(1000, 1000);
      ctx.bezierCurveTo(1000, 1000, 1000, 1000, 1000, 1000);
      ctx.lineTo(0, 1000);
      ctx.bezierCurveTo(0, 1000, 0, 1000, 0, 1000);
      ctx.lineTo(0, 0);
      ctx.bezierCurveTo(0, 0, 0, 0, 0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    const light4 = new Shape(ctx);
    light4.draw = () => {
      ctx.save();
      const g = ctx.createRadialGradient(500, 500, 0, 500, 500, 500);
      g.addColorStop(0, lightColor);
      g.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(1000, 0);
      ctx.bezierCurveTo(1000, 0, 1000, 0, 1000, 0);
      ctx.lineTo(1000, 1000);
      ctx.bezierCurveTo(1000, 1000, 1000, 1000, 1000, 1000);
      ctx.lineTo(0, 1000);
      ctx.bezierCurveTo(0, 1000, 0, 1000, 0, 1000);
      ctx.lineTo(0, 0);
      ctx.bezierCurveTo(0, 0, 0, 0, 0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    const cave4 = new Shape(ctx);
    cave4.draw = () => {
      ctx.save();
      ctx.fillStyle = "#4A2B29";
      ctx.beginPath();
      ctx.moveTo(-299.28, 125.21);
      ctx.lineTo(-169.28, 121.21);
      ctx.lineTo(-151.28, 245.21);
      ctx.lineTo(-121.28, 127.21);
      ctx.lineTo(-27.28, 111.21);
      ctx.lineTo(-11.28, 181.21);
      ctx.lineTo(4.72, 101.21);
      ctx.lineTo(114.72, 121.21);
      ctx.lineTo(196.72, 131.21);
      ctx.lineTo(224.72, 259.21);
      ctx.lineTo(260.72, 435.21);
      ctx.lineTo(260.72, 537.21);
      ctx.lineTo(272.72, 641.21);
      ctx.lineTo(234.72, 691.21);
      ctx.lineTo(250.72, 763.21);
      ctx.lineTo(190.72, 781.21);
      ctx.lineTo(-17.28, 811.21);
      ctx.lineTo(-95.28, 733.21);
      ctx.lineTo(-331.28, 763.21);
      ctx.lineTo(-333.28, 1247.21);
      ctx.lineTo(1310.72, 1267.21);
      ctx.lineTo(1314.72, 833.21);
      ctx.lineTo(926.72, 811.21);
      ctx.lineTo(646.72, 845.21);
      ctx.lineTo(476.72, 807.21);
      ctx.lineTo(458.72, 727.21);
      ctx.lineTo(380.72, 713.21);
      ctx.lineTo(384.72, 649.21);
      ctx.lineTo(336.72, 591.21);
      ctx.lineTo(304.72, 427.21);
      ctx.lineTo(336.72, 353.21);
      ctx.lineTo(334.72, 349.21);
      ctx.lineTo(278.72, 239.21);
      ctx.lineTo(290.72, 161.21);
      ctx.lineTo(416.72, 101.21);
      ctx.lineTo(468.72, 63.21);
      ctx.lineTo(588.72, 37.21);
      ctx.lineTo(620.72, 135.21);
      ctx.lineTo(622.72, 21.21);
      ctx.lineTo(626.72, 21.21);
      ctx.lineTo(754.72, 25.21);
      ctx.lineTo(764.72, 147.21);
      ctx.lineTo(776.72, 25.21);
      ctx.lineTo(780.72, 25.21);
      ctx.lineTo(928.72, 57.21);
      ctx.lineTo(1010.72, 51.21);
      ctx.lineTo(1068.72, 107.21);
      ctx.lineTo(1066.72, 207.21);
      ctx.lineTo(1118.72, 339.21);
      ctx.lineTo(1096.72, 413.21);
      ctx.lineTo(1060.72, 497.21);
      ctx.lineTo(1080.72, 611.21);
      ctx.lineTo(1040.72, 661.21);
      ctx.lineTo(994.72, 737.21);
      ctx.lineTo(1004.72, 841.21);
      ctx.lineTo(1310.72, 901.21);
      ctx.lineTo(1310.72, -214.79);
      ctx.lineTo(-305.28, -214.79);
      ctx.lineTo(-299.28, 125.21);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      ctx.save();
      const g = ctx.createLinearGradient(-197.28, -216.79, 1224.72, -216.79);
      g.addColorStop(0.483636, "rgba(255, 255, 255, 0.04)");
      g.addColorStop(1, "rgba(199, 199, 199, 0.12)");
      ctx.fillStyle = g;
      ctx.rotate(1.3089969389957472);
      ctx.beginPath();
      ctx.moveTo(-10000, -10000);
      ctx.lineTo(20000, -10000);
      ctx.bezierCurveTo(20000, -10000, 20000, -10000, 20000, -10000);
      ctx.lineTo(20000, 20000);
      ctx.bezierCurveTo(20000, 20000, 20000, 20000, 20000, 20000);
      ctx.lineTo(-10000, 20000);
      ctx.bezierCurveTo(-10000, 20000, -10000, 20000, -10000, 20000);
      ctx.lineTo(-10000, -10000);
      ctx.bezierCurveTo(-10000, -10000, -10000, -10000, -10000, -10000);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    const crystal1 = new Shape(ctx);
    crystal1.transformOrigin = new Vector2(460, 755);
    crystal1.draw = () => {
      ctx.save();
      ctx.fillStyle = crystalColor;
      ctx.beginPath();
      ctx.moveTo(438.828, 740.683);
      ctx.lineTo(421.094, 726.843);
      ctx.lineTo(402.928, 706.947);
      ctx.lineTo(429.312, 705.649);
      ctx.lineTo(452.669, 728.573);
      ctx.lineTo(450.939, 699.162);
      ctx.lineTo(463.049, 658.503);
      ctx.lineTo(483.377, 697.863);
      ctx.lineTo(479.485, 733.763);
      ctx.lineTo(492.894, 720.788);
      ctx.lineTo(521.008, 717.759);
      ctx.lineTo(504.139, 748.901);
      ctx.lineTo(477.323, 773.123);
      ctx.lineTo(452.236, 772.69);
      ctx.lineTo(428.014, 759.715);
      ctx.lineTo(412.011, 740.683);
      ctx.lineTo(438.828, 740.683);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.beginPath();
      ctx.moveTo(462.926, 658.59);
      ctx.lineTo(483.255, 697.734);
      ctx.lineTo(479.579, 734.066);
      ctx.lineTo(468.333, 746.177);
      ctx.lineTo(468.982, 700.113);
      ctx.lineTo(462.926, 658.59);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.font = "   15px ";
      ctx.beginPath();
      ctx.moveTo(402.805, 707.033);
      ctx.lineTo(429.189, 705.519);
      ctx.lineTo(452.546, 728.443);
      ctx.lineTo(453.194, 739.256);
      ctx.lineTo(425.513, 716.116);
      ctx.lineTo(402.805, 707.033);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.beginPath();
      ctx.moveTo(411.672, 740.554);
      ctx.lineTo(443.895, 740.554);
      ctx.lineTo(453.411, 749.421);
      ctx.lineTo(434.163, 751.151);
      ctx.lineTo(411.672, 740.554);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.beginPath();
      ctx.moveTo(492.987, 720.874);
      ctx.lineTo(521.101, 717.846);
      ctx.lineTo(504.449, 748.555);
      ctx.lineTo(493.852, 738.391);
      ctx.lineTo(492.987, 720.874);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.scale(0.35, 0.35);
      ctx.translate(810, 1550);
      const g = ctx.createRadialGradient(500, 500, 0, 500, 500, 500);
      g.addColorStop(0, "rgba(255, 255, 255, 0.3)");
      g.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(1000, 0);
      ctx.bezierCurveTo(1000, 0, 1000, 0, 1000, 0);
      ctx.lineTo(1000, 1000);
      ctx.bezierCurveTo(1000, 1000, 1000, 1000, 1000, 1000);
      ctx.lineTo(0, 1000);
      ctx.bezierCurveTo(0, 1000, 0, 1000, 0, 1000);
      ctx.lineTo(0, 0);
      ctx.bezierCurveTo(0, 0, 0, 0, 0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    const crystal2 = new Shape(ctx);
    crystal2.transformOrigin = new Vector2(582, 755);
    crystal2.draw = () => {
      ctx.save();
      ctx.fillStyle = crystalColor;
      ctx.beginPath();
      ctx.moveTo(578.627, 769.965);
      ctx.lineTo(557.433, 745.311);
      ctx.lineTo(558.731, 720.225);
      ctx.lineTo(579.924, 732.768);
      ctx.lineTo(587.71, 752.664);
      ctx.lineTo(595.063, 722.82);
      ctx.lineTo(608.904, 707.249);
      ctx.lineTo(616.689, 727.145);
      ctx.lineTo(600.253, 767.37);
      ctx.lineTo(591.603, 771.263);
      ctx.lineTo(578.627, 769.965);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.beginPath();
      ctx.moveTo(558.574, 720.076);
      ctx.lineTo(579.984, 732.835);
      ctx.lineTo(587.553, 752.732);
      ctx.lineTo(585.391, 761.815);
      ctx.lineTo(567.657, 740.405);
      ctx.lineTo(558.574, 720.076);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.beginPath();
      ctx.moveTo(608.747, 707.316);
      ctx.lineTo(616.533, 727.213);
      ctx.lineTo(600.313, 767.221);
      ctx.lineTo(592.095, 770.898);
      ctx.lineTo(607.017, 727.213);
      ctx.lineTo(608.747, 707.316);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.scale(0.25, 0.25);
      ctx.translate(1840, 2410);
      const g = ctx.createRadialGradient(500, 500, 0, 500, 500, 500);
      g.addColorStop(0, "rgba(255, 255, 255, 0.3)");
      g.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(1000, 0);
      ctx.bezierCurveTo(1000, 0, 1000, 0, 1000, 0);
      ctx.lineTo(1000, 1000);
      ctx.bezierCurveTo(1000, 1000, 1000, 1000, 1000, 1000);
      ctx.lineTo(0, 1000);
      ctx.bezierCurveTo(0, 1000, 0, 1000, 0, 1000);
      ctx.lineTo(0, 0);
      ctx.bezierCurveTo(0, 0, 0, 0, 0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    const crystal3 = new Shape(ctx);
    crystal3.transformOrigin = new Vector2(658, 765);
    crystal3.draw = () => {
      ctx.save();
      ctx.fillStyle = crystalColor;
      ctx.beginPath();
      ctx.moveTo(648.336, 766.522);
      ctx.lineTo(650.714, 755.277);
      ctx.lineTo(659.148, 745.977);
      ctx.lineTo(669.963, 754.411);
      ctx.lineTo(675.585, 766.954);
      ctx.lineTo(662.61, 771.063);
      ctx.lineTo(648.336, 766.522);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.beginPath();
      ctx.moveTo(659.149, 745.977);
      ctx.lineTo(658.933, 757.439);
      ctx.lineTo(669.746, 754.411);
      ctx.lineTo(659.149, 745.977);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.scale(0.12, 0.12);
      ctx.translate(4990, 5850);
      const g = ctx.createRadialGradient(500, 500, 0, 500, 500, 500);
      g.addColorStop(0, "rgba(255, 255, 255, 0.3)");
      g.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(1000, 0);
      ctx.bezierCurveTo(1000, 0, 1000, 0, 1000, 0);
      ctx.lineTo(1000, 1000);
      ctx.bezierCurveTo(1000, 1000, 1000, 1000, 1000, 1000);
      ctx.lineTo(0, 1000);
      ctx.bezierCurveTo(0, 1000, 0, 1000, 0, 1000);
      ctx.lineTo(0, 0);
      ctx.bezierCurveTo(0, 0, 0, 0, 0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Create scene objects
    const backgroundObj = new SceneObject(background);
    const cave1Obj = new SceneObject(cave1);
    const light1Obj = new SceneObject(light1);
    const cave2Obj = new SceneObject(cave2);
    const light2Obj = new SceneObject(light2);
    const cave3Obj = new SceneObject(cave3);
    const light3Obj = new SceneObject(light3);
    const light4Obj = new SceneObject(light4);
    const cave4Obj = new SceneObject(cave4);
    const crystal1Obj1 = new SceneObject(crystal1);
    const crystal1Obj2 = new SceneObject(crystal1);
    const crystal2Obj1 = new SceneObject(crystal2);
    const crystal2Obj2 = new SceneObject(crystal2);
    const crystal2Obj3 = new SceneObject(crystal2);
    const crystal3Obj1 = new SceneObject(crystal3);
    const crystal3Obj2 = new SceneObject(crystal3);
    const crystal3Obj3 = new SceneObject(crystal3);
    const crystal3Obj4 = new SceneObject(crystal3);

    // Check if a string is color, inspired by this https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color
    function isColor(strColor: string) {
      const s = new Option().style;
      s.color = strColor;
      return s.color === strColor;
    }

    // Transform object to its correct position
    function transformObject(object: SceneObject, positionX: number, positionY: number, scaleX: number, scaleY: number, rotation: number) {
      object.update = () => {
        let positionVec = new Vector2(positionX, positionY);
        let scaleVec = new Vector2(scaleX, scaleY);
        object.transform.position = positionVec;
        object.transform.scale = scaleVec;
        object.transform.rotation = rotation;
      }
    }

    // Transform object with regard to cameraState(a number that represents mouse's position)
    function transformObjPosWithMod(object: SceneObject, positionX: number, positionY: number, mod: number, cameraState: Vector2) {
      object.update = () => {
        let vector = new Vector2(positionX + (cameraState.x * mod), positionY + (cameraState.y * mod));
        object.transform.position = vector;
      }
    }

    // This object controls all the transformations
    const sceneController = new SceneObject(new Shape(ctx));
    sceneController.update = () => {
      cameraSensitivity = art.publicProperties["Camera sensitivity (max 10)"];
      crystalColor = art.publicProperties['Crystal color'];

      if (isColor(art.publicProperties['Light color'])) {
        lightColor = art.publicProperties['Light color'];
      } else {
        crystalColor = "rgba(255, 255, 245, 0.5)";
      }

      // Update for the entire scene
      transformObject(cave1Obj, 0, 0, 1, 1, 0);
      transformObject(cave2Obj, 0, 0, 1, 1, 0);
      transformObject(cave3Obj, 0, 0, 1, 1, 0);
      transformObject(cave4Obj, 0, 0, 1, 1, 0);
      transformObject(light1Obj, 150, -400, 0.08, 1.5, -0.5);
      transformObject(light2Obj, 300, -300, 0.15, 1.4, -0.5);
      transformObject(light3Obj, -200, -500, 0.25, 1.7, -0.5);
      transformObject(light4Obj, -400, -500, 0.07, 1.5, -0.5);
      transformObject(crystal1Obj1, 890, 640, 0.8, 0.8, -0.6);
      transformObject(crystal1Obj2, 480, 340, 0.2, 0.2, 3);
      transformObject(crystal2Obj1, 160, 340, 0.8, 0.8, 2);
      transformObject(crystal2Obj2, 380, 700, 0.9, 1, 0.9);
      transformObject(crystal2Obj3, 760, 700, 0.5, 0.5, 0.1);
      transformObject(crystal3Obj1, 560, 150, 0.6, 0.6, 2);
      transformObject(crystal3Obj2, 480, 660, 1, 1, 1.5);
      transformObject(crystal3Obj3, 90, 660, 1, 0.9, 5);
      transformObject(crystal3Obj4, 850, 830, 1.1, 1.1, 0.2);

      // Get mouse cordinate, local coordinate
      const mouseXPos = art.linkedCanvas?.mouse?.localPos.x;
      const mouseYPos = art.linkedCanvas?.mouse?.localPos.y;
      if (mouseXPos && mouseYPos) {
        // if mouse is outside canvas then revert back to normal position
        if ((mouseXPos > 1000 || mouseXPos < 0) || (mouseYPos > 1000 || mouseYPos < 0)) {
          // Canvas return to normal state
        } else {
          // If Sensitivity is set above 10 then it remains 10
          if (parseInt(cameraSensitivity) > 10) {
            cameraSensitivity = "10";
          }
          // Set a variable where center is 0, 0, the sides of the canvas is 1 or -1
          const cameraState = new Vector2(parseInt(cameraSensitivity) * (mouseXPos - 500) / 500, parseInt(cameraSensitivity) * (mouseYPos - 500) / 500);

          // Transform objects to position accordingly
          transformObjPosWithMod(cave1Obj, 0, 0, 3, cameraState);
          transformObjPosWithMod(cave2Obj, 0, 0, 8, cameraState);
          transformObjPosWithMod(cave3Obj, 0, 0, 13, cameraState);
          transformObjPosWithMod(cave4Obj, 0, 0, 20, cameraState);
          transformObjPosWithMod(light1Obj, 150, -400, 5, cameraState);
          transformObjPosWithMod(light2Obj, 300, -300, 13, cameraState);
          transformObjPosWithMod(light3Obj, -200, -500, 16, cameraState);
          transformObjPosWithMod(light4Obj, -400, -500, 18, cameraState);
          transformObjPosWithMod(crystal1Obj1, 890, 640, 13, cameraState);
          transformObjPosWithMod(crystal1Obj2, 480, 340, 3, cameraState);
          transformObjPosWithMod(crystal2Obj1, 160, 340, 8, cameraState);
          transformObjPosWithMod(crystal2Obj2, 380, 700, 20, cameraState);
          transformObjPosWithMod(crystal2Obj3, 760, 700, 8, cameraState);
          transformObjPosWithMod(crystal3Obj1, 560, 150, 13, cameraState);
          transformObjPosWithMod(crystal3Obj2, 480, 660, 8, cameraState);
          transformObjPosWithMod(crystal3Obj3, 90, 660, 13, cameraState);
          transformObjPosWithMod(crystal3Obj4, 850, 830, 20, cameraState);

        }

        // Animated lights
        [light1Obj, light2Obj, light3Obj, light4Obj].map((light, index) => {
          const oldUpdate = light.update;
          light.update = () => {
            oldUpdate && oldUpdate(); // extend the existing update
            light.transform.position.x -= (Math.sin(index * 2.3 + Date.now() / 1000) + 1) * 100;
            light.transform.position.y -= (Math.sin(index * 2.3 + Date.now() / 1000) + 1) * 187;
          }
          return light;
        });
      }
    }


    // Layer1
    art.scene.addObject(backgroundObj);
    art.scene.addObject(cave1Obj);
    art.scene.addObject(crystal1Obj2);
    // Layer1.2
    art.scene.addObject(light1Obj);
    // Layer2
    art.scene.addObject(cave2Obj);
    art.scene.addObject(crystal2Obj1);
    art.scene.addObject(crystal3Obj2);
    art.scene.addObject(crystal2Obj3);
    // Layer2.2
    art.scene.addObject(light2Obj);
    // Layer3
    art.scene.addObject(cave3Obj);
    art.scene.addObject(crystal3Obj1);
    art.scene.addObject(crystal3Obj3);
    art.scene.addObject(crystal1Obj1);
    // Layer3.2
    art.scene.addObject(light3Obj);
    // Layer3.3
    art.scene.addObject(light4Obj);
    // Layer4
    art.scene.addObject(cave4Obj);
    art.scene.addObject(crystal2Obj2);
    art.scene.addObject(crystal3Obj4);
    // Front
    art.scene.addObject(new PoetryObjectLineByLine(art.scene, poetryUrl));
    art.scene.addObject(sceneController);
  }
  return art;
}