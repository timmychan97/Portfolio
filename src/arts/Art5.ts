import Scene from "../canvasComponents/Scene";
import SceneObject from "../canvasComponents/SceneObject";
import Shape from "../canvasComponents/Shape";
import { lerp, Vector2 } from "../Util";
import Art from "../canvasComponents/Art";
import PoetryObjectLineByLine from "../canvasComponents/PoetryObjectLineByLine";
import CloudObject from "../canvasComponents/CloudObject";

export function Art5(): Art {
  let art = new Art();
  art.id = 5;
  art.title = "Sky Is Blue";
  art.sound = {
    'WindSound': '/music/FREE SOUND EFFECT - WIND [NO COPYRIGHT].mp3',
  }
  art.publicProperties = {
    'Fast forward': '1',
    'Wind speed': '1',
    'Number of stars': '200',
  }
  
  const poetryUrl = "https://poetrydb.org/title/The%20Worship%20of%20Nature/lines.json";

  art.createScene = (ctx: CanvasRenderingContext2D) => {
    art.playSound("WindSound", true);
    art.scene = new Scene(ctx);
    const cloudPNG = new Image();
    cloudPNG.src = "./clouds.png";

    let skyColor = "rgba(118, 201, 237, 1)";

    // Start creating shapes
    const backgroundShape = new Shape(ctx);
    backgroundShape.draw = () => {
      ctx.save();
      const g = ctx.createLinearGradient(0, 0, 0, 2000);
      g.addColorStop(0.51, skyColor);
      g.addColorStop(1, "rgba(240, 97, 36, 1)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(2000, 0);
      ctx.bezierCurveTo(2000, 0, 2000, 0, 2000, 0);
      ctx.lineTo(2000, 2000);
      ctx.bezierCurveTo(2000, 2000, 2000, 2000, 2000, 2000);
      ctx.lineTo(0, 2000);
      ctx.bezierCurveTo(0, 2000, 0, 2000, 0, 2000);
      ctx.lineTo(0, 0);
      ctx.bezierCurveTo(0, 0, 0, 0, 0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Inspired by this code => https://codepen.io/felixcriv/pen/LKtgn
    const starShapes: any[] = [];
    let numberOfStars = parseInt(art.publicProperties['Number of stars']);
    let memoryStar = 0;
    let starColor = "rgba(255, 255, 255, 0)";
    const starShape = new Shape(ctx);
    starShape.draw = () => {
      numberOfStars = parseInt(art.publicProperties['Number of stars']);
      if (memoryStar !== numberOfStars) {
        for (let i = 0; i < numberOfStars; i++) {
          starShapes.push({
            x: Math.random() * 2000 - 1000,
            y: Math.random() * 2000 - 1000,
            r: Math.random() + 4,
            b: Math.random(),
          });
        }
        memoryStar = numberOfStars;
      }
      ctx.beginPath();
      ctx.fillStyle = starColor;
      for (let i = 0; i < numberOfStars; i++) {
        const starPos = starShapes[i];
        ctx.moveTo(starPos.x, starPos.y);
        ctx.arc(starPos.x, starPos.y, starPos.r * Math.random(), 0, Math.PI * 2, true);
      }
      ctx.fill();
      ctx.restore();
    }

    const sunMoonShape = new Shape(ctx);
    sunMoonShape.draw = () => {
      const sun = ctx.createRadialGradient(800, 400, 0, 800, 400, 400);
      sun.addColorStop(0, "rgba(255, 255, 255, 0.824)");
      sun.addColorStop(1, "rgba(232, 232, 232, 0)");
      ctx.fillStyle = sun;
      ctx.fill();
      const moon = ctx.createRadialGradient(-800, -400, 0, -800, -400, 200);
      moon.addColorStop(0, "rgba(255, 255, 255, 0.4)");
      moon.addColorStop(1, "rgba(232, 232, 232, 0)");
      ctx.fillStyle = moon;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(800, 400, 30, 0, 2 * Math.PI);
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(-800, -400, 40, 0, 2 * Math.PI);
      ctx.fillStyle = "rgb(210, 210, 220)";
      ctx.fill();
    }

    const mountainsShape1 = new Shape(ctx);
    mountainsShape1.draw = () => {
      ctx.save();
      ctx.fillStyle = "rgba(80, 80, 80, 1)";
      ctx.beginPath();
      ctx.moveTo(-32, 419.2);
      ctx.lineTo(52, 373.2);
      ctx.lineTo(72, 389.2);
      ctx.lineTo(130, 363.2);
      ctx.lineTo(190, 391.2);
      ctx.lineTo(246, 369.2);
      ctx.lineTo(276, 347.2);
      ctx.lineTo(308, 353.2);
      ctx.lineTo(338, 371.2);
      ctx.lineTo(366, 363.2);
      ctx.lineTo(414, 381.2);
      ctx.lineTo(458, 385.2);
      ctx.lineTo(492, 367.2);
      ctx.lineTo(522, 379.2);
      ctx.lineTo(574, 367.2);
      ctx.lineTo(608, 351.2);
      ctx.lineTo(640, 367.2);
      ctx.lineTo(730, 375.2);
      ctx.lineTo(756, 387.2);
      ctx.lineTo(788, 363.2);
      ctx.lineTo(822, 387.2);
      ctx.lineTo(858, 391.2);
      ctx.lineTo(880, 375.2);
      ctx.lineTo(912, 389.2);
      ctx.lineTo(954, 357.2);
      ctx.lineTo(986, 389.2);
      ctx.lineTo(1030, 379.2);
      ctx.lineTo(1116, 1051.2);
      ctx.lineTo(-68, 1053.2);
      ctx.lineTo(-32, 419.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    const mountainsShape2 = new Shape(ctx);
    mountainsShape2.draw = () => {
      ctx.save();
      ctx.fillStyle = "rgba(90, 93, 90, 1)";
      ctx.beginPath();
      ctx.moveTo(1020, 505.2);
      ctx.lineTo(960, 467.2);
      ctx.lineTo(910, 441.2);
      ctx.lineTo(866, 471.2);
      ctx.lineTo(828, 491.2);
      ctx.lineTo(772, 471.2);
      ctx.lineTo(742, 499.2);
      ctx.lineTo(708, 535.2);
      ctx.lineTo(666, 557.2);
      ctx.lineTo(634, 537.2);
      ctx.lineTo(590, 493.2);
      ctx.lineTo(544, 527.2);
      ctx.lineTo(502, 577.2);
      ctx.lineTo(446, 629.2);
      ctx.lineTo(384, 701.2);
      ctx.lineTo(336, 791.2);
      ctx.lineTo(254, 881.2);
      ctx.lineTo(272, 973.2);
      ctx.lineTo(306, 1027.2);
      ctx.lineTo(1030, 1021.2);
      ctx.lineTo(1020, 505.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    const mountainsShape3 = new Shape(ctx);
    mountainsShape3.draw = () => {
      ctx.save();
      ctx.fillStyle = "rgba(100, 105, 100, 1)";
      ctx.beginPath();
      ctx.moveTo(-36, 677.2);
      ctx.lineTo(48, 599.2);
      ctx.lineTo(128, 557.2);
      ctx.lineTo(184, 515.2);
      ctx.lineTo(212, 547.2);
      ctx.lineTo(276, 565.2);
      ctx.lineTo(326, 603.2);
      ctx.lineTo(398, 643.2);
      ctx.lineTo(452, 709.2);
      ctx.lineTo(532, 765.2);
      ctx.lineTo(610, 797.2);
      ctx.lineTo(660, 913.2);
      ctx.lineTo(674, 1023.2);
      ctx.lineTo(-22, 1013.2);
      ctx.lineTo(-36, 677.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    const cloudShape = new Shape(ctx);

    const closeMountainShape = new Shape(ctx);
    closeMountainShape.draw = () => {
      ctx.save();
      ctx.fillStyle = "rgba(152, 155, 150, 1)";
      ctx.beginPath();
      ctx.moveTo(230, 1025.2);
      ctx.lineTo(308, 953.2);
      ctx.lineTo(432, 859.2);
      ctx.lineTo(558, 781.2);
      ctx.lineTo(620, 733.2);
      ctx.lineTo(678, 741.2);
      ctx.lineTo(708, 791.2);
      ctx.lineTo(742, 877.2);
      ctx.lineTo(756, 961.2);
      ctx.lineTo(806, 1029.2);
      ctx.lineTo(230, 1025.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = "rgba(111, 114, 110, 1)";
      ctx.beginPath();
      ctx.moveTo(160, 1023.2);
      ctx.lineTo(266, 949.2);
      ctx.lineTo(398, 889.2);
      ctx.lineTo(302, 967.2);
      ctx.lineTo(252, 1033.2);
      ctx.lineTo(160, 1023.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = "rgba(111, 114, 110, 1)";
      ctx.beginPath();
      ctx.moveTo(722, 833.2);
      ctx.lineTo(754, 887.2);
      ctx.lineTo(772, 947.2);
      ctx.lineTo(864, 1031.2);
      ctx.lineTo(754, 1033.2);
      ctx.lineTo(720, 933.2);
      ctx.lineTo(722, 833.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    const characterShape = new Shape(ctx);
    characterShape.draw = () => {
      ctx.save();
      ctx.fillStyle = "rgba(20, 20, 20, 1)";
      ctx.beginPath();
      ctx.moveTo(637.92, 672.4);
      ctx.lineTo(625.92, 682.9);
      ctx.lineTo(627.92, 693.9);
      ctx.lineTo(631.92, 699.9);
      ctx.lineTo(621.92, 708.9);
      ctx.lineTo(614.92, 723.9);
      ctx.lineTo(617.92, 749.9);
      ctx.lineTo(623.92, 788.9);
      ctx.lineTo(628.92, 788.9);
      ctx.lineTo(632.92, 752.9);
      ctx.lineTo(637.92, 750.9);
      ctx.lineTo(643.92, 786.9);
      ctx.lineTo(648.92, 786.9);
      ctx.lineTo(652.92, 748.9);
      ctx.lineTo(654.92, 721.9);
      ctx.lineTo(652.92, 706.9);
      ctx.lineTo(643.92, 698.9);
      ctx.lineTo(648.92, 688.9);
      ctx.lineTo(646.92, 677.4);
      ctx.lineTo(637.92, 672.4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    const hoodShape = new Shape(ctx);
    hoodShape.transformOrigin = new Vector2(635, 670);
    hoodShape.draw = () => {
      ctx.save();
      ctx.fillStyle = "rgba(140, 50, 45, 1)";
      ctx.beginPath();
      ctx.moveTo(635.92, 706.7);
      ctx.lineTo(620.92, 696.7);
      ctx.lineTo(622.92, 683.2);
      ctx.lineTo(631.92, 670.2);
      ctx.lineTo(643.92, 674.2);
      ctx.lineTo(652.43, 683.7);
      ctx.lineTo(655.43, 696.7);
      ctx.lineTo(635.92, 706.7);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    let cape1Pos1 = new Vector2(610.92, 740.7);
    let cape1Pos2 = new Vector2(661.93, 738.7);
    let cape2Pos1 = new Vector2(617.92, 781.7);
    let cape2Pos2 = new Vector2(667.93, 776.7);
    const capeShape = new Shape(ctx);
    capeShape.transformOrigin = new Vector2(635.92, 702);
    capeShape.draw = () => {
      ctx.save();
      ctx.fillStyle = "rgba(140, 50, 45, 1)";
      ctx.beginPath();
      ctx.moveTo(635.92, 690.2);
      ctx.lineTo(616.92, 713.7);
      ctx.lineTo(cape1Pos1.x, cape1Pos1.y);
      ctx.lineTo(cape2Pos1.x, cape2Pos1.y);
      ctx.lineTo(cape2Pos2.x, cape2Pos2.y);
      ctx.lineTo(cape1Pos2.x, cape1Pos2.y);
      ctx.lineTo(657.93, 708.7);
      ctx.lineTo(635.92, 690.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    const nightTimeOverlayShape = new Shape(ctx);
    let nightTimeOverlayOpacity = 0;
    nightTimeOverlayShape.draw = () => {
      ctx.save();
      ctx.miterLimit = 4;
      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.fillStyle = "rgba(0, 0, 0, " + nightTimeOverlayOpacity.toString() + ")";
      ctx.beginPath();
      ctx.moveTo(-32, 419.2);
      ctx.lineTo(52, 373.2);
      ctx.lineTo(72, 389.2);
      ctx.lineTo(130, 363.2);
      ctx.lineTo(190, 391.2);
      ctx.lineTo(246, 369.2);
      ctx.lineTo(276, 347.2);
      ctx.lineTo(308, 353.2);
      ctx.lineTo(338, 371.2);
      ctx.lineTo(366, 363.2);
      ctx.lineTo(414, 381.2);
      ctx.lineTo(458, 385.2);
      ctx.lineTo(492, 367.2);
      ctx.lineTo(522, 379.2);
      ctx.lineTo(574, 367.2);
      ctx.lineTo(608, 351.2);
      ctx.lineTo(640, 367.2);
      ctx.lineTo(730, 375.2);
      ctx.lineTo(756, 387.2);
      ctx.lineTo(788, 363.2);
      ctx.lineTo(822, 387.2);
      ctx.lineTo(858, 391.2);
      ctx.lineTo(880, 375.2);
      ctx.lineTo(912, 389.2);
      ctx.lineTo(954, 357.2);
      ctx.lineTo(986, 389.2);
      ctx.lineTo(1030, 379.2);
      ctx.lineTo(1116, 1051.2);
      ctx.lineTo(-68, 1053.2);
      ctx.lineTo(-32, 419.2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    const startTime = Date.now();
    let now = 0;
    // Day runs from 0 to 8 in loop of 80 seconds
    let day = 0;
    // Time object that controls the time of the day
    const timeObj = new SceneObject(new Shape(ctx));
    timeObj.update = () => {
      now = (Date.now() - startTime) * (+(art.publicProperties['Fast forward'])) / 1000;
      day = (now % 80) / 10;
    }

    // Controls the background's movement
    const backgroundObj = new SceneObject(backgroundShape);
    backgroundObj.update = () => {
      let daynight = 0;
      if (day < 1) {
        // Day
        daynight = 0;
      } else if (1 < day && day < 2) {
        daynight = day - 1;
      } else if (2 < day && day < 3) {
        // Evening
        daynight = 1;
        skyColor = "rgba("
          + Math.round(lerp(118, 30, (day - 2))).toString() + ", "
          + Math.round(lerp(201, 40, (day - 2))).toString() + ", "
          + Math.round(lerp(237, 60, (day - 2))).toString() + ", 1)";
      } else if (3 < day && day < 4) {
        daynight = 1 - (day - 3);
      } else if (4 < day && day < 5) {
        // Night
        daynight = 0;
      } else if (5 < day && day < 6) {
        daynight = day - 5;
      } else if (6 < day && day < 7) {
        // Morning
        daynight = 1;
        skyColor = "rgba("
          + Math.round(lerp(30, 118, (day - 6))).toString() + ", "
          + Math.round(lerp(40, 201, (day - 6))).toString() + ", "
          + Math.round(lerp(60, 237, (day - 6))).toString() + ", 1)";
      } else if (7 < day) {
        daynight = 1 - (day - 7);
      }
      let backTransVec = new Vector2(0, lerp(0, -1500, daynight));
      backgroundObj.transform.position = backTransVec;
    }

    // Turns stars around and increase or decrease opacity
    const starObj = new SceneObject(starShape);
    starObj.update = () => {
      starObj.transform.position = new Vector2(0, 500);
      starObj.transform.rotation = - (day * Math.PI / 4) - 1;
      if (day < 2.5) {
        starColor = "rgba(255, 255, 255, 0)";
      } else if (2.5 < day && day < 3.5) {
        starColor = "rgba(255, 255, 255, " + (day - 2.5).toString() + ")";
      } else if (3 < day && day < 5.5) {
        starColor = "rgba(255, 255, 255, 1)";
      } else if (5.5 < day && day < 6.5) {
        starColor = "rgba(255, 255, 255, " + (1 - (day - 5.5)).toString() + ")";
      } else if (6.5 < day) {
        starColor = "rgba(255, 255, 255, 0)";
      }
    }

    // Turn the sun and moon around
    const sunMoonObj = new SceneObject(sunMoonShape);
    sunMoonObj.update = () => {
      sunMoonObj.transform.position = new Vector2(0, 500);
      sunMoonObj.transform.rotation = - (day * Math.PI / 4) - 1;
    }

    // Create mountain object
    const mountainsObj1 = new SceneObject(mountainsShape1);
    const mountainsObj2 = new SceneObject(mountainsShape2);
    mountainsObj2.update = () => {
      mountainsObj2.transform.position.y = -20;
    }
    const mountainsObj3 = new SceneObject(mountainsShape3);
    const closeMountainObj = new SceneObject(closeMountainShape);

    // Cloud
    const cloudImgSrc = "img/cloudUnit.png";
    const clouds = new SceneObject(cloudShape);
    let cloudList: CloudObject[] = [];
    let cloudList2: CloudObject[] = [];
    let cloudList3: CloudObject[] = [];
    let numberOfClouds = 60;
    let randomNum1: number[] = [];
    let randomNum2: number[] = [];
    let timeInterval = 16;
    let loopTime = now % timeInterval;
    let convertedTime = loopTime / timeInterval;
    let previousTime = now % timeInterval;
    let oddTime = true;
    let cloudSpeed = 1;
    let rotationStart: number[] = [];

    clouds.update = () => {
      loopTime = now % timeInterval;
      convertedTime = loopTime / timeInterval;
      cloudSpeed = +art.publicProperties['Wind speed'];
      if (previousTime > (loopTime)) {
        oddTime = !oddTime;
      }
      previousTime = loopTime;
      updateCloud(cloudList, 1, 470, 1);
      updateCloud(cloudList2, 2.5, 600, 1.5);
      updateCloud(cloudList3, 6, 800, 2.3);
    }
    // Update all clouds tranform and opacity
    function updateCloud(list: CloudObject[], speedScale: number, yPosCloud: number, scaleNum: number) {
      for (let i = 0; i < list.length; i++) {
        let c = list[i];
        if (oddTime) {
          c.setYPos(yPosCloud + lerp(randomNum1[i] * 100, randomNum2[i] * 100, convertedTime));
          c.scaleX = lerp(randomNum2[i] * 0.4, randomNum1[i] * 0.4, convertedTime) + 0.3 * scaleNum;
          c.scaleY = lerp(randomNum2[i] * 0.4, randomNum1[i] * 0.4, convertedTime) + 0.5 * scaleNum;
          c.rotationNum = rotationStart[i] + lerp(randomNum2[i] * 0.5, randomNum1[i] * 0.5, convertedTime);
          c.opacity = lerp(randomNum1[i] * 0.4, randomNum2[i] * 0.4, convertedTime);
        } else {
          c.setYPos(yPosCloud + lerp(randomNum2[i] * 100, randomNum1[i] * 100, convertedTime));
          c.scaleX = lerp(randomNum1[i] * 0.4, randomNum2[i] * 0.4, convertedTime) + 0.3 * scaleNum;
          c.scaleY = lerp(randomNum1[i] * 0.4, randomNum2[i] * 0.4, convertedTime) + 0.5 * scaleNum;
          c.rotationNum = rotationStart[i] + lerp(randomNum1[i] * 0.5, randomNum2[i] * 0.5, convertedTime);
          c.opacity = lerp(randomNum2[i] * 0.4, randomNum1[i] * 0.4, convertedTime);
        }
        c.setSpeed(cloudSpeed * speedScale);
        c.convertTimeToLifeTime(now / timeInterval, i, numberOfClouds);
        c.update();
      }
    }

    // Character objects
    const characterObj = new SceneObject(characterShape);
    const hoodObj = new SceneObject(hoodShape);
    const capeInterval = 1.5;
    let capeLoopSpeed = capeInterval / cloudSpeed;
    let capeCounter = true;
    let capePrevTime = now % capeLoopSpeed;
    hoodObj.update = () => {
      capeLoopSpeed = capeInterval / cloudSpeed;
      if (capePrevTime > now % capeLoopSpeed) {
        if (capeCounter === true) {
          capeCounter = false;
        } else {
          capeCounter = true;
        }
      }
      capePrevTime = now % capeLoopSpeed;
      hoodObj.transform.position = new Vector2(635, 670);
      if (capeCounter) {
        hoodObj.transform.scale.x = lerp(1, 1.05, (now % capeLoopSpeed) / capeLoopSpeed);
      } else {
        hoodObj.transform.scale.x = lerp(1.05, 1, (now % capeLoopSpeed) / capeLoopSpeed);
      }
    }
    const capeObj = new SceneObject(capeShape);
    capeObj.update = () => {
      if (capeCounter) {
        cape1Pos1 = new Vector2(lerp(613.92, 620, (now % capeLoopSpeed) / capeLoopSpeed), lerp(740.7, 740.7, (now % capeLoopSpeed) / capeLoopSpeed));
        cape1Pos2 = new Vector2(lerp(661.93, 667, (now % capeLoopSpeed) / capeLoopSpeed), lerp(738.7, 736.7, (now % capeLoopSpeed) / capeLoopSpeed));
        cape2Pos1 = new Vector2(lerp(630, 617.92, (now % capeLoopSpeed) / capeLoopSpeed), lerp(781.7, 777.7, (now % capeLoopSpeed) / capeLoopSpeed));
        cape2Pos2 = new Vector2(lerp(680, 667.93, (now % capeLoopSpeed) / capeLoopSpeed), lerp(770.7, 776.7, (now % capeLoopSpeed) / capeLoopSpeed));
      } else {
        cape1Pos1 = new Vector2(lerp(620, 613.92, (now % capeLoopSpeed) / capeLoopSpeed), lerp(740.7, 740.7, (now % capeLoopSpeed) / capeLoopSpeed));
        cape1Pos2 = new Vector2(lerp(667, 661.93, (now % capeLoopSpeed) / capeLoopSpeed), lerp(736.7, 738.7, (now % capeLoopSpeed) / capeLoopSpeed));
        cape2Pos1 = new Vector2(lerp(617.92, 630, (now % capeLoopSpeed) / capeLoopSpeed), lerp(777.7, 781.7, (now % capeLoopSpeed) / capeLoopSpeed));
        cape2Pos2 = new Vector2(lerp(667.93, 680, (now % capeLoopSpeed) / capeLoopSpeed), lerp(776.7, 770.7, (now % capeLoopSpeed) / capeLoopSpeed));
      }
      capeObj.transform.position = new Vector2(635.92, 702);
      capeObj.transform.rotation = (1 / Math.pow(cloudSpeed, 0.2)) * Math.PI * 2 / 3 - Math.PI * 2 / 3;
    }

    // The overlay act to darken the land area of the canvas
    const nightTimeOverlayObj = new SceneObject(nightTimeOverlayShape);
    nightTimeOverlayObj.update = () => {
      if (day < 2) {
        nightTimeOverlayOpacity = 0;
      } else if (2 < day && day < 3.5) {
        nightTimeOverlayOpacity = (day - 2) / 3;
      } else if (3 < day && day < 5.5) {
        nightTimeOverlayOpacity = 1 / 2;
      } else if (5.5 < day && day < 7) {
        nightTimeOverlayOpacity = (1.5 - (day - 5.5)) / 3;
      } else if (7 < day) {
        nightTimeOverlayOpacity = 0;
      }
    }

    // Add to scene
    art.scene.addObject(timeObj);
    art.scene.addObject(clouds);
    art.scene.addObject(backgroundObj);
    art.scene.addObject(sunMoonObj);
    art.scene.addObject(starObj);
    art.scene.addObject(mountainsObj1);
    for (let i = 0; i < numberOfClouds; i++) {
      randomNum1.push(Math.random())
      randomNum2.push(Math.random())
      rotationStart.push(Math.random() * Math.PI * 2);
      let cloud = new CloudObject(ctx, cloudImgSrc);
      cloudList.push(cloud);
      art.scene?.addObject(cloud);
    }
    art.scene.addObject(mountainsObj2);
    for (let i = 0; i < numberOfClouds; i++) {
      let cloud2 = new CloudObject(ctx, cloudImgSrc);
      cloudList2.push(cloud2);
      art.scene?.addObject(cloud2);
    }
    art.scene.addObject(mountainsObj3);
    for (let i = 0; i < numberOfClouds; i++) {
      let cloud3 = new CloudObject(ctx, cloudImgSrc);
      cloudList3.push(cloud3);
      art.scene?.addObject(cloud3);
    }
    art.scene.addObject(closeMountainObj);
    art.scene.addObject(characterObj);
    art.scene.addObject(hoodObj);
    art.scene.addObject(capeObj);
    art.scene.addObject(nightTimeOverlayObj);
    art.scene.addObject(new PoetryObjectLineByLine(art.scene, poetryUrl));
  }
  return art;
}