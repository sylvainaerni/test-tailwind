<template>
  <v-stage
    ref="stage"
    :config="configKonva"
    @mousedown="handleStageMouseDown"
  >
    <v-layer ref="layer">
      <v-sprite
        ref="sprite"
        v-for="item in stars"
        :key="item.id"
        :config="{
          name: `star`+item.id,
          x: item.x,
          y: item.y,
          rotation: item.rotation,
          id: item.id,
          draggable: true,

          image: image,
          animation: 'idle',
          animations: animations,
          frameRate: 10,
          frameIndex: 0,
          animations: {
            idle: [
              // x, y, width, height (6 frames)
                0,   0, 98, 98,
               98,   0, 98, 98,
              200,   0, 98, 98
            ],
            punch: [2, 138, 74, 122, 76, 138, 84, 122, 346, 138, 120, 122]
          }
        }"
      />
      <!--v-star
        v-for="item in stars"
        :key="item.id"
        :config="{
          name: `star`+item.id,
          x: item.x,
          y: item.y,
          rotation: item.rotation,
          id: item.id,
          numPoints: 5,
          innerRadius: 30,
          outerRadius: 50,
          fill: '#89b717',
          opacity: 0.8,
          draggable: true,
          // scaleX: dragItemId === item.id ? item.scale * 1.2 : item.scale,
          // scaleY: dragItemId === item.id ? item.scale * 1.2 : item.scale,
          // shadowColor: 'black',
          // shadowBlur: 10,
          // shadowOffsetX: dragItemId === item.id ? 15 : 5,
          // shadowOffsetY: dragItemId === item.id ? 15 : 5,
          // shadowOpacity: 0.6
        }"
      ></v-star-->
      <v-transformer ref="transformer" />
    </v-layer>
  </v-stage>
</template>

<script>
const width = window.innerWidth;
const height = window.innerHeight;

export default {
  data() {
    return {
      image: null,
      animations: null,
      stars: [],
      dragItemId: null,
      configKonva: {
        width: width,
        height: height
      }
    };
  },
  created() {
    var image = new window.Image();
    image.src = require(`@/assets/sprites/cric-test.png`);
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    };

  },
  methods: {
    // handleClick() {
    //   const node = this.$refs.sprite.getNode();
    //   if (node.isRunning()) {
    //     node.stop();
    //   } else {
    //     node.start();
    //   }
    // },

    handleStageMouseDown(e) {
      // clicked on stage - cler selection
      if (e.target === e.target.getStage()) {
        this.dragItemId = '';
        this.updateTransformer();
        return;
      }

      // clicked on transformer - do nothing
      const clickedOnTransformer =
        e.target.getParent().className === 'Transformer';
      if (clickedOnTransformer) {
        return;
      }

      // find clicked star by its name
      const name = e.target.name();

      const star = this.stars.find(s => s.name === name);

      if (star) {
        this.dragItemId = name;

      } else {
        this.dragItemId = "";
      }
      this.updateTransformer();
    },
    updateTransformer() {
      // here we need to manually attach or detach Transformer node
      const transformerNode = this.$refs.transformer.getStage();
      const stage = transformerNode.getStage();
      const { dragItemId } = this;

      const selectedNode = stage.findOne('.' + dragItemId);
      // do nothing if selected node is already attached
      if (selectedNode === transformerNode.node()) {
        return;
      }

      if (selectedNode) {
        // attach to another node
        transformerNode.attachTo(selectedNode);
      } else {
        // remove transformer
        transformerNode.detach();
      }
      transformerNode.getLayer().batchDraw();
    }
  },
  mounted() {
    for (let n = 0; n < 30; n++) {
      this.stars.push({
        name: 'star'+n,
        id: n,
        x: Math.random() * width,
        y: Math.random() * height,
        rotation: Math.random() * 180,
        scale: Math.random()
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.specialspan {
  @apply bg-black bg-blue-300 block p-8 text-6xl text-center text-white;

  &:hover {
    @apply bg-white text-red-300;
  }
}
</style>
