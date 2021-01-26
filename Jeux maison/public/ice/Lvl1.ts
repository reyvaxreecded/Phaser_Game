
// You can write more code here

/* START OF COMPILED CODE */

class Lvl1 extends Phaser.Scene {
	
	constructor() {
		super("Lvl1");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// bg_icebergs_1
		const bg_icebergs_1 = this.add.image(0, 0, "bg-icebergs-1");
		bg_icebergs_1.scaleX = 1.014;
		bg_icebergs_1.scaleY = 0.96;
		bg_icebergs_1.setOrigin(0, 0);
		
		// block_slide_up_1
		const block_slide_up_1 = this.add.image(448, 704, "block_slide_up_1");
		block_slide_up_1.setOrigin(0, 0);
		
		// block_slide_up_2
		const block_slide_up_2 = this.add.image(448, 640, "block_slide_up_2");
		block_slide_up_2.setOrigin(0, 0);
		
		// block_slide_up_4
		const block_slide_up_4 = this.add.image(512, 576, "block_slide_up_4");
		block_slide_up_4.setOrigin(0, 0);
		
		// block_ground_05_mid
		const block_ground_05_mid = this.add.image(512, 704, "block_ground_05_mid");
		block_ground_05_mid.setOrigin(0, 0);
		
		// block_ground_05_mid_1
		const block_ground_05_mid_1 = this.add.image(512, 640, "block_ground_05_mid");
		block_ground_05_mid_1.setOrigin(0, 0);
		
		// block_snow_1_left
		const block_snow_1_left = this.add.image(0, 704, "block_snow_1_left");
		block_snow_1_left.setOrigin(0, 0);
		
		// block_snow_1_mid_1
		const block_snow_1_mid_1 = this.add.image(64, 704, "block_snow_1_mid_1");
		block_snow_1_mid_1.setOrigin(0, 0);
		
		// block_snow_1_mid_2
		const block_snow_1_mid_2 = this.add.image(128, 704, "block_snow_1_mid_2");
		block_snow_1_mid_2.setOrigin(0, 0);
		
		// block_snow_1_mid_3
		const block_snow_1_mid_3 = this.add.image(192, 704, "block_snow_1_mid_3");
		block_snow_1_mid_3.setOrigin(0, 0);
		
		// block_snow_1_mid_3_1
		const block_snow_1_mid_3_1 = this.add.image(384, 704, "block_snow_1_mid_3");
		block_snow_1_mid_3_1.setOrigin(0, 0);
		
		// block_snow_1_mid_2_1
		const block_snow_1_mid_2_1 = this.add.image(320, 704, "block_snow_1_mid_2");
		block_snow_1_mid_2_1.setOrigin(0, 0);
		
		// block_snow_1_mid_1_1
		const block_snow_1_mid_1_1 = this.add.image(256, 704, "block_snow_1_mid_1");
		block_snow_1_mid_1_1.setOrigin(0, 0);
		
		// block_ground_05_mid_2
		const block_ground_05_mid_2 = this.add.image(576, 640, "block_ground_05_mid");
		block_ground_05_mid_2.setOrigin(0, 0);
		
		// block_ground_05_mid_2_1
		const block_ground_05_mid_2_1 = this.add.image(576, 704, "block_ground_05_mid");
		block_ground_05_mid_2_1.setOrigin(0, 0);
		
		// block_snow_1_right
		const block_snow_1_right = this.add.image(576, 576, "block_snow_1_right");
		block_snow_1_right.setOrigin(0, 0);
		
		// block_slide_down_2_1
		const block_slide_down_2_1 = this.add.image(704, 640, "block_slide_down_2");
		block_slide_down_2_1.setOrigin(0, 0);
		
		// block_slide_down_1
		const block_slide_down_1 = this.add.image(704, 704, "block_slide_down_1");
		block_slide_down_1.setOrigin(0, 0);
		
		// block_snow_1_mid_1_2
		const block_snow_1_mid_1_2 = this.add.image(768, 704, "block_snow_1_mid_1");
		block_snow_1_mid_1_2.setOrigin(0, 0);
		block_snow_1_mid_1_2.flipX = true;
		
		// block_snow_1_mid_2_2
		const block_snow_1_mid_2_2 = this.add.image(832, 704, "block_snow_1_mid_2");
		block_snow_1_mid_2_2.setOrigin(0, 0);
		
		// block_snow_1_mid_3_2
		const block_snow_1_mid_3_2 = this.add.image(896, 704, "block_snow_1_mid_3");
		block_snow_1_mid_3_2.setOrigin(0, 0);
		
		// block_snow_1_mid_3_3
		const block_snow_1_mid_3_3 = this.add.image(960, 704, "block_snow_1_mid_3");
		block_snow_1_mid_3_3.setOrigin(0, 0);
		
		// block_snow_1_mid_1_2_1
		const block_snow_1_mid_1_2_1 = this.add.image(1024, 704, "block_snow_1_mid_1");
		block_snow_1_mid_1_2_1.setOrigin(0, 0);
		block_snow_1_mid_1_2_1.flipX = true;
		
		// block_snow_1_mid_2_2_1
		const block_snow_1_mid_2_2_1 = this.add.image(1088, 704, "block_snow_1_mid_2");
		block_snow_1_mid_2_2_1.setOrigin(0, 0);
		
		// block_snow_1_right_1
		const block_snow_1_right_1 = this.add.image(1152, 704, "block_snow_1_right");
		block_snow_1_right_1.setOrigin(0, 0);
		
		// object_tree_large
		const object_tree_large = this.add.image(32, 448, "object_tree_large");
		object_tree_large.setOrigin(0, 0);
		
		// object_tree_large_1
		const object_tree_large_1 = this.add.image(432, 448, "object_tree_large");
		object_tree_large_1.setOrigin(0, 0);
		
		// object_tree_small
		const object_tree_small = this.add.image(96, 512, "object_tree_small");
		object_tree_small.setOrigin(0, 0);
		
		// object_tree_large_2_1
		const object_tree_large_2_1 = this.add.image(704, 448, "object_tree_large");
		object_tree_large_2_1.setOrigin(0, 0);
		
		// object_tree_large_2_1_1
		const object_tree_large_2_1_1 = this.add.image(1024, 448, "object_tree_large");
		object_tree_large_2_1_1.setOrigin(0, 0);
		
		// object_tree_small_1_1_1
		const object_tree_small_1_1_1 = this.add.image(992, 512, "object_tree_small");
		object_tree_small_1_1_1.setOrigin(0, 0);
		
		// block_ice_01a
		const block_ice_01a = this.add.image(896, 576, "block_ice_01a");
		block_ice_01a.setOrigin(0, 0);
		
		// block_ice_01a_1
		const block_ice_01a_1 = this.add.image(960, 576, "block_ice_01a");
		block_ice_01a_1.setOrigin(0, 0);
		
		// block_ice_01a_1_1
		const block_ice_01a_1_1 = this.add.image(1088, 576, "block_ice_01a");
		block_ice_01a_1_1.setOrigin(0, 0);
		
		// block_ice_01a_2
		const block_ice_01a_2 = this.add.image(1024, 576, "block_ice_01a");
		block_ice_01a_2.setOrigin(0, 0);
		
		// object_04_star
		const object_04_star = this.add.image(1152, 656, "object_04_star");
		object_04_star.scaleX = 0.1;
		object_04_star.scaleY = 0.1;
		object_04_star.setOrigin(0, 0);
		
		// object_06_coin_1_1_1_1
		const object_06_coin_1_1_1_1 = this.add.image(320, 656, "object_06_coin");
		object_06_coin_1_1_1_1.scaleX = 0.1;
		object_06_coin_1_1_1_1.scaleY = 0.1;
		object_06_coin_1_1_1_1.setOrigin(0, 0);
		
		// object_06_coin_1_1_2
		const object_06_coin_1_1_2 = this.add.image(256, 656, "object_06_coin");
		object_06_coin_1_1_2.scaleX = 0.1;
		object_06_coin_1_1_2.scaleY = 0.1;
		object_06_coin_1_1_2.setOrigin(0, 0);
		
		// object_06_coin_1_2
		const object_06_coin_1_2 = this.add.image(192, 656, "object_06_coin");
		object_06_coin_1_2.scaleX = 0.1;
		object_06_coin_1_2.scaleY = 0.1;
		object_06_coin_1_2.setOrigin(0, 0);
		
		// object_06_coin_2
		const object_06_coin_2 = this.add.image(128, 656, "object_06_coin");
		object_06_coin_2.scaleX = 0.1;
		object_06_coin_2.scaleY = 0.1;
		object_06_coin_2.setOrigin(0, 0);
		
		// object_06_coin_3_1
		const object_06_coin_3_1 = this.add.image(464, 592, "object_06_coin");
		object_06_coin_3_1.scaleX = 0.1;
		object_06_coin_3_1.scaleY = 0.1;
		object_06_coin_3_1.setOrigin(0, 0);
		
		// object_01_gem_blue
		const object_01_gem_blue = this.add.image(384, 656, "object_01_gem_blue");
		object_01_gem_blue.scaleX = 0.1;
		object_01_gem_blue.scaleY = 0.1;
		object_01_gem_blue.setOrigin(0, 0);
		
		// object_03_gem_red
		const object_03_gem_red = this.add.image(800, 656, "object_03_gem_red");
		object_03_gem_red.scaleX = 0.1;
		object_03_gem_red.scaleY = 0.1;
		object_03_gem_red.setOrigin(0, 0);
		
		// object_02_gem_green
		const object_02_gem_green = this.add.image(656, 480, "object_02_gem_green");
		object_02_gem_green.scaleX = 0.1;
		object_02_gem_green.scaleY = 0.1;
		object_02_gem_green.setOrigin(0, 0);
		
		// object_06_coin_2_1
		const object_06_coin_2_1 = this.add.image(896, 656, "object_06_coin");
		object_06_coin_2_1.scaleX = 0.1;
		object_06_coin_2_1.scaleY = 0.1;
		object_06_coin_2_1.setOrigin(0, 0);
		
		// object_06_coin_1_1_2_1
		const object_06_coin_1_1_2_1 = this.add.image(1024, 656, "object_06_coin");
		object_06_coin_1_1_2_1.scaleX = 0.1;
		object_06_coin_1_1_2_1.scaleY = 0.1;
		object_06_coin_1_1_2_1.setOrigin(0, 0);
		
		// object_06_coin_1_1_1_1_1
		const object_06_coin_1_1_1_1_1 = this.add.image(1088, 656, "object_06_coin");
		object_06_coin_1_1_1_1_1.scaleX = 0.1;
		object_06_coin_1_1_1_1_1.scaleY = 0.1;
		object_06_coin_1_1_1_1_1.setOrigin(0, 0);
		
		// object_06_coin_1_2_1
		const object_06_coin_1_2_1 = this.add.image(960, 656, "object_06_coin");
		object_06_coin_1_2_1.scaleX = 0.1;
		object_06_coin_1_2_1.scaleY = 0.1;
		object_06_coin_1_2_1.setOrigin(0, 0);
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
