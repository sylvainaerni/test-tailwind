
const spriteLibrary = {

  bouton01: {
    image: null,
    imageName: 'imageButtons',
    width: 160,
    height: 160,
    fill: 'transparent',
    animation: 'vibrato',
    frameRate: 6,
    frameIndex: 1,
    animations: {
      vibrato: [
        160, 0, 160, 160,
        320, 0, 160, 160,
        0, 160, 160, 160,
        160, 160, 160, 160,
        0, 160, 160, 160,
        160, 160, 160, 160,
        0, 160, 160, 160,
        160, 160, 160, 160,
        0, 160, 160, 160,
        160, 160, 160, 160,
        0, 160, 160, 160,
        320, 160, 160, 160,
        160, 0, 160, 160,
        0, 320, 160, 160,
      ]
    }
  },

  bouton02: {
    image: null,
    imageName: 'imageButtons',
    width: 120,
    height: 80,
    fill: 'transparent',
    animation: 'vibrato',
    frameRate: 10,
    frameIndex: 1,
    animations: {
      vibrato: [
        // x, y, width, height
        160, 320, 120, 80,
        280, 320, 120, 80,
      ]
    }
  },

  bouton03: {
    image: null,
    imageName: 'imageButtons',
    width: 120,
    height: 100,
    fill: 'transparent',
    animation: 'vibrato',
    frameRate: 10,
    frameIndex: 1,
    animations: {
      vibrato: [
        0, 480, 120, 100,
        120, 480, 120, 100,
      ]
    }
  },

  bouton04: {
    image: null,
    imageName: 'imageButtons',
    width: 120,
    height: 80,
    fill: 'transparent',
    animation: 'vibrato',
    frameRate: 10,
    frameIndex: 1,
    animations: {
      vibrato: [
        240, 480, 120, 80,
        360, 480, 120, 80,
        0, 580, 120, 80,
      ]
    }
  },

  bouton05: {
    image: null,
    imageName: 'imageButtons',
    width: 160,
    height: 120,
    fill: 'transparent',
    animation: 'vibrato',
    frameRate: 10,
    frameIndex: 1,
    animations: {
      vibrato: [
        120, 580, 160, 120,
        280, 580, 160, 120,
      ]
    }
  },

  bouton06: {
    image: null,
    imageName: 'imageButtons',
    width: 120,
    height: 80,
    fill: 'transparent',
    animation: 'vibrato',
    frameRate: 10,
    frameIndex: 1,
    animations: {
      vibrato: [
        0, 700, 120, 80,
        120, 700, 120, 80,
        240, 700, 120, 80,
        360, 700, 120, 80,
        0, 780, 120, 80,
        120, 780, 120, 80,
        240, 780, 120, 80,
        360, 780, 120, 80,
        0, 860, 120, 80,
        120, 860, 120, 80,
        120, 700, 120, 80,
      ]
    }
  },

  bouton07: {
    image: null,
    imageName: 'imageButtons',
    width: 120,
    height: 80,
    fill: 'transparent',
    animation: 'vibrato',
    frameRate: 10,
    frameIndex: 1,
    animations: {
      vibrato: [
        240, 860, 120, 80,
        360, 860, 120, 80,
      ]
    }
  },


  sheetsSimpleJump: {
    image: null,
    imageName: 'imageTest',
    width: 130,
    height: 160,
    fill: 'transparent',
    animation: 'vibrato',
    frameRate: 10,
    frameIndex: 1,
    animations: {
      vibrato: [
        // x, y, width, height (3 frames)
        300, 250, 130, 160,
        430, 250, 130, 160,
        560, 250, 130, 160,
        690, 250, 130, 160,
        820, 250, 130, 160,
        0, 410, 130, 160,
        130, 410, 130, 160,
        260, 410, 130, 160,
        390, 410, 130, 160,
        520, 410, 130, 160,
        650, 410, 130, 160,
        780, 410, 130, 160
      ]
    }
  },
  cubeBig: {
    image: null,
    imageName: 'imageTest',
    width: 300,
    height: 250,
    fill: 'transparent',
    animation: 'vibrato',
    frameRate: 10,
    frameIndex: 0,
    animations: {
      vibrato: [
        // x, y, width, height (3 frames)
        0, 0, 300, 250,
        300, 0, 300, 250,
        600, 0, 300, 250]
    }
  },
  cubeSmall: {
    image: null,
    imageName: 'imageTest',
    width: 150,
    height: 130,
    fill: 'transparent',
    animation: 'vibrato',
    frameRate: 5,
    frameIndex: 1,
    animations: {
      vibrato: [
        // x, y, width, height (3 frames)
        0, 250, 150, 130,
        150, 250, 150, 130
      ]
    }
  },
  wheel001: {
    image: null,
    imageName: 'imageTest',
    width: 70,
    height: 100,
    fill: 'transparent',
    animation: 'vibrato',
    frameRate: 10,
    frameIndex: 1,
    animations: {
      vibrato: [
        // x, y, width, height (3 frames)
        0, 570, 70, 100,
        70, 570, 70, 100,
        140, 570, 70, 100,
        210, 570, 70, 100,
        280, 570, 70, 100,
        350, 570, 70, 100
      ]
    }
  }
};

let itemId = 0;

export const store = {
  state: {
    items : []
  },

  addItem(param) {
    let newItem = {
      name: 'group-' + itemId,
      itemId: itemId,
      x: param.x,
      y: param.y,
      actionsAreVisible: false,
      spriteName: param.spriteName,
      sprite: spriteLibrary[param.spriteName]
    }
    this.state.items.push(newItem);
    itemId++;
  },

  showActionItems(itemName) {
    const index = store.state.items.findIndex(x => x.name === itemName);
    if (index !== undefined) store.state.items[index].actionsAreVisible = true;
  },

  hideActionItems(itemName) {
    const index = store.state.items.findIndex(x => x.name === itemName);
    if (index !== undefined) store.state.items[index].actionsAreVisible = false;
  },

  setNewPos(itemGroup) {
    const index = store.state.items.findIndex(x => x.name === itemGroup.attrs.name);
    store.state.items[index].x = itemGroup.attrs.x;
    store.state.items[index].y = itemGroup.attrs.y;
  },

  removeItem(itemName) {
    const index = store.state.items.findIndex(x => x.name === itemName);
    if (index !== undefined) store.state.items.splice(index, 1);
  },

  pushItemUp(itemName) {
    const index = store.state.items.findIndex(x => x.name === itemName);
    if (index < store.state.items.length - 1)
      this.moveItem(store.state.items, index, index + 1)
  },

  pushItemDown(itemName) {
    const index = store.state.items.findIndex(x => x.name === itemName);
    if (index > 0)
      this.moveItem(store.state.items, index, index - 1);
  },

  moveItem(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  },

  removeAllItems() {
    store.state.items.splice(0, store.state.items.length);
  },

  load() {
    this.removeAllItems();
    const data = localStorage.getItem('storage') || '[]';
    let fetchedArray = JSON.parse(data);
    for (let i = 0; i < fetchedArray.length; i++) {
      store.addItem(fetchedArray[i]);
    }
  },

  save() {
    let storedArray = [];
    for (let i = 0; i < this.state.items.length; i++) {
      storedArray[i] = {};
      storedArray[i].spriteName = this.state.items[i].spriteName;
      storedArray[i].x = this.state.items[i].x;
      storedArray[i].y = this.state.items[i].y;
    }
    localStorage.setItem('storage', JSON.stringify(storedArray));
  }

};
