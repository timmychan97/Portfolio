import Canvas from "../components/Canvas";
import Scene from "./Scene";

export default class Art {
  title = "Untitled Art"
  scene?: Scene;
  sound: Record<string, string>;
  linkedCanvas?: Canvas;
  id = 0;
  isMuted = true;

  // The properties to be shown in the property panel.
  publicProperties: Record<string, string>;

  constructor(scene?: Scene) {
    this.scene = scene;
    this.sound = {};
    this.publicProperties = {};  // Empty dictionary/object literal
  }

  createScene = (ctx: CanvasRenderingContext2D) => { };

  /**
   * Plays a sound that is defined in this.sound object
   * @param soundName The name of the audio file
   * @param repeat Makes the audio loop automatically. This is the builtin function of audio tags, which might introduce gaps between loops
   * @param seamless Make the looping seamless
   */
  playSound = (soundName: string, repeat = false, seamless = false) => {
    if (this.isMuted) return;

    if (this.sound[soundName]) {
      const audio = document.getElementById("artid" + this.id + "-" + soundName) as HTMLAudioElement;
      if (audio) {
        if (!seamless) {
          audio.loop = repeat;
          audio.play();
        }
        else {
          audio.loop = repeat;
          // HTML5 audio elements is limited. There are always a small delay when running looping audio. 
          // We implement our own looping condition
          // Inspired by https://stackoverflow.com/a/22446616/7502914
          // This still has some limitations. timeupdate event not firing when touchmove event is running.
          audio.addEventListener('timeupdate', function () {
            var buffer = .44;
            if (this.currentTime > this.duration - buffer) {
              this.currentTime = 0;
              this.play();
            }
          });
          audio.play();
        }
      }
    }
  }

  replaceArtPropByStorage() {
    Object.keys(this.publicProperties).forEach(property => {
      const storedData = this.getArtPropFromSessionStorage(property);
      if (storedData) this.publicProperties[property] = storedData;
    });
  }

  getArtPropFromSessionStorage(key: string) {
    return sessionStorage.getItem(this.id + "-" + key);
  }
}