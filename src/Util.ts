class PoetryAPI {
  static async getLines(url: string) {
    let a: string[] = [];
    console.log("Fetching poetry from:", url)
    await fetch(url).then(response => response.json())
      .then(data => a = data[0].lines)
      .then(() => console.log("Lines successfully fetched from url:", url))
      .catch(function () {
        console.log("Error fetching poetry");
        a = ["Error fetching poetry", "Cannot fetch poetry data", "Make sure you have internet access"]
      });
    return a;
  }
}


export function lerp(a: number, b: number, t: number) {
  return a + t * (b - a);
}


class Vector2 {
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  };

  copy() {
    return new Vector2(this.x, this.y);
  }

  /**
   * Subtract two vectors element-wise, and return a new Vector2
   * @returns a minus b
   */
  static sub = (a: Vector2, b: Vector2) => {
    return new Vector2(a.x - b.x, a.y - b.y);
  };

  /**
   * Multiply a vector element-wise with a number
   * @returns a minus b
   */
  static mul = (a: Vector2, b: number) => {
    return new Vector2(a.x * b, a.y * b);
  };

  // Add a vector into the this vector
  add(other: Vector2) {
    this.x += other.x;
    this.y += other.y;
    return this;
  };

  // Subtract a vector from this vector
  sub(other: Vector2) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  };


  // Subtract a vector from this vector
  mul(t: number) {
    this.x *= t;
    this.y *= t;
    return this;
  };

  // Normalize this vector
  normalize() {
    this.mul(1 / this.magnitude());
    return this;
  };

  // Gets the magnitude of this vector
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  // Get a random directional vector
  static randomRotation(between = [0, 2 * Math.PI]) {
    const rotation = between[0] + Math.random() * (between[1] - between[0]);
    const vec = new Vector2(Math.cos(rotation), Math.sin(rotation));
    return vec;
  };
}

export { PoetryAPI, Vector2 };