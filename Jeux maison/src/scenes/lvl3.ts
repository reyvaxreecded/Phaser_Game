
// You can write more code here

/* START OF COMPILED CODE */

class lvl3 extends Phaser.Scene {
	
	constructor() {
		super("lvl3");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// block_ground_05_mid_png
		const block_ground_05_mid_png = this.add.tileSprite(342, 187, 64, 64, "plateform", "block_ground_05_mid.png");
		block_ground_05_mid_png.visible = false;
		
		// bg_icebergs_2
		const bg_icebergs_2 = this.add.image(609, 384, "bg-icebergs-2");
		bg_icebergs_2.scaleX = 1.014;
		bg_icebergs_2.scaleY = 0.96;
		
		// block_snow_1_left_png
		this.add.image(32, 608, "plateform", "block_snow_1_left.png");
		
		// block_snow_1_mid_1_png_2
		this.add.image(96, 608, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_2_1
		this.add.image(224, 608, "plateform", "block_snow_1_mid_1.png");
		
		// block_snow_1_mid_1_png_3
		this.add.image(160, 608, "plateform", "block_snow_1_mid_1.png");
		
		// block_slide_down_4_png
		this.add.image(288, 608, "plateform", "block_slide_down_4.png");
		
		// block_ground_05_mid_png_1
		this.add.image(32, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2
		this.add.image(96, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_3
		this.add.image(160, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1
		this.add.image(224, 736, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_4
		this.add.image(32, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_2_1
		this.add.image(96, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_3_1
		this.add.image(160, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1
		this.add.image(224, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_1
		this.add.image(288, 672, "plateform", "block_ground_05_mid.png");
		
		// block_ground_05_mid_png_1_1_1_1_1_1
		this.add.image(288, 736, "plateform", "block_ground_05_mid.png");
		
		// block_slide_down_2_png
		this.add.image(352, 672, "plateform", "block_slide_down_2.png");
		
		// block_slide_down_1_png
		this.add.image(352, 736, "plateform", "block_slide_down_1.png");
		
		// block_snow_1_mid_1_png_1
		this.add.image(416, 736, "plateform", "block_snow_1_mid_1.png");
		
		// object_04_star_png
		const object_04_star_png = this.add.image(1184, 672, "collectible", "object_04_star.png");
		object_04_star_png.scaleX = 0.1;
		object_04_star_png.scaleY = 0.1;
		
		// block_snow_1_right_png
		this.add.image(1184, 736, "plateform", "block_snow_1_right.png");
		
		// platform_snow_png
		this.add.image(560, 528, "plateform", "platform_snow.png");
		
		// platform_snow_png_1
		this.add.image(672, 496, "plateform", "platform_snow.png");
		
		// platform_snow_png_1_1
		this.add.image(800, 544, "plateform", "platform_snow.png");
		
		// platform_snow_png_1_2
		this.add.image(416, 560, "plateform", "platform_snow.png");
		
		// platform_snow_png_1_3
		this.add.image(960, 608, "plateform", "platform_snow.png");
		
		// block_snow_1_mid_3_png
		this.add.image(992, 736, "plateform", "block_snow_1_mid_3.png");
		
		// block_snow_1_mid_3_png_1
		this.add.image(928, 736, "plateform", "block_snow_1_mid_3.png");
		
		// block_snow_1_mid_3_png_1_1
		this.add.image(800, 736, "plateform", "block_snow_1_mid_3.png");
		
		// block_snow_1_mid_3_png_2
		this.add.image(864, 736, "plateform", "block_snow_1_mid_3.png");
		
		// block_snow_1_mid_3_png_2_1
		this.add.image(608, 736, "plateform", "block_snow_1_mid_3.png");
		
		// block_snow_1_mid_3_png_1_2
		this.add.image(672, 736, "plateform", "block_snow_1_mid_3.png");
		
		// block_snow_1_mid_3_png_1_1_1_1
		this.add.image(480, 736, "plateform", "block_snow_1_mid_3.png");
		
		// object_06_coin_png
		const object_06_coin_png = this.add.image(208, 544, "collectible", "object_06_coin.png");
		object_06_coin_png.scaleX = 0.1;
		object_06_coin_png.scaleY = 0.1;
		
		// object_06_coin_png_2
		const object_06_coin_png_2 = this.add.image(560, 496, "collectible", "object_06_coin.png");
		object_06_coin_png_2.scaleX = 0.1;
		object_06_coin_png_2.scaleY = 0.1;
		
		// object_06_coin_png_2_1
		const object_06_coin_png_2_1 = this.add.image(672, 448, "collectible", "object_06_coin.png");
		object_06_coin_png_2_1.scaleX = 0.1;
		object_06_coin_png_2_1.scaleY = 0.1;
		
		// object_06_coin_png_2_2
		const object_06_coin_png_2_2 = this.add.image(800, 512, "collectible", "object_06_coin.png");
		object_06_coin_png_2_2.scaleX = 0.1;
		object_06_coin_png_2_2.scaleY = 0.1;
		
		// object_06_coin_png_2_3
		const object_06_coin_png_2_3 = this.add.image(960, 576, "collectible", "object_06_coin.png");
		object_06_coin_png_2_3.scaleX = 0.1;
		object_06_coin_png_2_3.scaleY = 0.1;
		
		// object_06_coin_png_2_4
		const object_06_coin_png_2_4 = this.add.image(1088, 544, "collectible", "object_06_coin.png");
		object_06_coin_png_2_4.scaleX = 0.1;
		object_06_coin_png_2_4.scaleY = 0.1;
		
		// object_06_coin_png_2_5
		const object_06_coin_png_2_5 = this.add.image(896, 528, "collectible", "object_06_coin.png");
		object_06_coin_png_2_5.scaleX = 0.1;
		object_06_coin_png_2_5.scaleY = 0.1;
		
		// object_03_gem_red_png
		const object_03_gem_red_png = this.add.image(416, 512, "collectible", "object_03_gem_red.png");
		object_03_gem_red_png.scaleX = 0.1;
		object_03_gem_red_png.scaleY = 0.1;
		
		// object_02_gem_green_png
		const object_02_gem_green_png = this.add.image(544, 656, "collectible", "object_02_gem_green.png");
		object_02_gem_green_png.scaleX = 0.1;
		object_02_gem_green_png.scaleY = 0.1;
		
		// object_01_gem_blue_png
		const object_01_gem_blue_png = this.add.image(1088, 656, "collectible", "object_01_gem_blue.png");
		object_01_gem_blue_png.scaleX = 0.1;
		object_01_gem_blue_png.scaleY = 0.1;
		
		// object_06_coin_png_1
		const object_06_coin_png_1 = this.add.image(304, 592, "collectible", "object_06_coin.png");
		object_06_coin_png_1.scaleX = 0.1;
		object_06_coin_png_1.scaleY = 0.1;
		
		// object_06_coin_png_3
		const object_06_coin_png_3 = this.add.image(384, 672, "collectible", "object_06_coin.png");
		object_06_coin_png_3.scaleX = 0.1;
		object_06_coin_png_3.scaleY = 0.1;
		
		// object_06_coin_png_4
		const object_06_coin_png_4 = this.add.image(480, 672, "collectible", "object_06_coin.png");
		object_06_coin_png_4.scaleX = 0.1;
		object_06_coin_png_4.scaleY = 0.1;
		
		// object_06_coin_png_4_2
		const object_06_coin_png_4_2 = this.add.image(624, 672, "collectible", "object_06_coin.png");
		object_06_coin_png_4_2.scaleX = 0.1;
		object_06_coin_png_4_2.scaleY = 0.1;
		
		// object_06_coin_png_4_3
		const object_06_coin_png_4_3 = this.add.image(816, 672, "collectible", "object_06_coin.png");
		object_06_coin_png_4_3.scaleX = 0.1;
		object_06_coin_png_4_3.scaleY = 0.1;
		
		// object_06_coin_png_4_4
		const object_06_coin_png_4_4 = this.add.image(912, 672, "collectible", "object_06_coin.png");
		object_06_coin_png_4_4.scaleX = 0.1;
		object_06_coin_png_4_4.scaleY = 0.1;
		
		// object_06_coin_png_4_5
		const object_06_coin_png_4_5 = this.add.image(976, 672, "collectible", "object_06_coin.png");
		object_06_coin_png_4_5.scaleX = 0.1;
		object_06_coin_png_4_5.scaleY = 0.1;
		
		// object_06_coin_png_4_2_1
		const object_06_coin_png_4_2_1 = this.add.image(736, 672, "collectible", "object_06_coin.png");
		object_06_coin_png_4_2_1.scaleX = 0.1;
		object_06_coin_png_4_2_1.scaleY = 0.1;
		
		// object_06_coin_png_4_2_2
		const object_06_coin_png_4_2_2 = this.add.image(672, 672, "collectible", "object_06_coin.png");
		object_06_coin_png_4_2_2.scaleX = 0.1;
		object_06_coin_png_4_2_2.scaleY = 0.1;
		
		// object_06_coin_png_4_2_3
		const object_06_coin_png_4_2_3 = this.add.image(864, 672, "collectible", "object_06_coin.png");
		object_06_coin_png_4_2_3.scaleX = 0.1;
		object_06_coin_png_4_2_3.scaleY = 0.1;
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
