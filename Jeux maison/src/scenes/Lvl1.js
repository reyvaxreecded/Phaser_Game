
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
		const bg_icebergs_1 = this.add.image(609, 200, "bg-icebergs-1");
		bg_icebergs_1.scaleX = 1.015;
		
		// block_slide_up_1
		this.add.image(481, 568, "block_slide_up_1");
		
		// block_slide_up_2
		this.add.image(481, 504, "block_slide_up_2");
		
		// block_slide_up_4
		this.add.image(545, 440, "block_slide_up_4");
		
		// block_ground_05_mid
		this.add.image(545, 568, "block_ground_05_mid");
		
		// block_ground_05_mid_1
		this.add.image(545, 504, "block_ground_05_mid");
		
		// block_snow_1_left
		this.add.image(33, 568, "block_snow_1_left");
		
		// block_snow_1_mid_1
		this.add.image(97, 568, "block_snow_1_mid_1");
		
		// block_snow_1_mid_2
		this.add.image(161, 568, "block_snow_1_mid_2");
		
		// block_snow_1_mid_3
		this.add.image(225, 568, "block_snow_1_mid_3");
		
		// block_snow_1_mid_3_1
		this.add.image(417, 568, "block_snow_1_mid_3");
		
		// block_snow_1_mid_2_1
		this.add.image(353, 568, "block_snow_1_mid_2");
		
		// block_snow_1_mid_1_1
		this.add.image(289, 568, "block_snow_1_mid_1");
		
		// block_ground_05_mid_2
		this.add.image(609, 504, "block_ground_05_mid");
		
		// block_ground_05_mid_2_1
		this.add.image(609, 568, "block_ground_05_mid");
		
		// block_snow_1_right
		this.add.image(609, 440, "block_snow_1_right");
		
		// block_slide_down_2_1
		this.add.image(737, 504, "block_slide_down_2");
		
		// block_slide_down_1
		this.add.image(737, 568, "block_slide_down_1");
		
		// block_snow_1_mid_1_2
		const block_snow_1_mid_1_2 = this.add.image(801, 568, "block_snow_1_mid_1");
		block_snow_1_mid_1_2.flipX = true;
		
		// block_snow_1_mid_2_2
		this.add.image(865, 568, "block_snow_1_mid_2");
		
		// block_snow_1_mid_3_2
		this.add.image(929, 568, "block_snow_1_mid_3");
		
		// block_snow_1_mid_3_3
		this.add.image(993, 568, "block_snow_1_mid_3");
		
		// block_snow_1_mid_1_2_1
		const block_snow_1_mid_1_2_1 = this.add.image(1057, 568, "block_snow_1_mid_1");
		block_snow_1_mid_1_2_1.flipX = true;
		
		// block_snow_1_mid_2_2_1
		this.add.image(1121, 568, "block_snow_1_mid_2");
		
		// block_snow_1_right_1
		this.add.image(1185, 568, "block_snow_1_right");
		
		// object_tree_large
		this.add.image(65, 322, "object_tree_large");
		
		// object_tree_large_1
		this.add.image(290, 322, "object_tree_large");
		
		// object_tree_small
		this.add.image(128, 349, "object_tree_small");
		
		// object_tree_large_2
		this.add.image(550, 322, "object_tree_large");
		
		// object_tree_large_2_1
		this.add.image(805.1268486024194, 322.3766567727872, "object_tree_large");
		
		// object_tree_large_2_1_1
		this.add.image(1064.7098076866241, 322.44438279828375, "object_tree_large");
		
		// object_tree_small_1
		this.add.image(496, 349, "object_tree_small");
		
		// object_tree_small_1_1
		this.add.image(594.7671241932835, 348.97030073137154, "object_tree_small");
		
		// object_tree_small_1_1_1
		this.add.image(1023, 349, "object_tree_small");
		
		// block_ice_01a
		this.add.image(929, 462, "block_ice_01a");
		
		// block_ice_01a_1
		this.add.image(993, 462, "block_ice_01a");
		
		// block_ice_01a_1_1
		this.add.image(1120.538512035441, 462.0940508681122, "block_ice_01a");
		
		// block_ice_01a_2
		this.add.image(1056.538512035441, 462.0940508681122, "block_ice_01a");
		
		// object_04_star
		const object_04_star = this.add.image(1185, 515, "object_04_star");
		object_04_star.scaleX = 0.1;
		object_04_star.scaleY = 0.1;
		
		// object_06_coin_1_1_1_1
		const object_06_coin_1_1_1_1 = this.add.image(353, 515, "object_06_coin");
		object_06_coin_1_1_1_1.scaleX = 0.1;
		object_06_coin_1_1_1_1.scaleY = 0.1;
		
		// object_06_coin_1_1_2
		const object_06_coin_1_1_2 = this.add.image(289, 515, "object_06_coin");
		object_06_coin_1_1_2.scaleX = 0.1;
		object_06_coin_1_1_2.scaleY = 0.1;
		
		// object_06_coin_1_2
		const object_06_coin_1_2 = this.add.image(225, 515, "object_06_coin");
		object_06_coin_1_2.scaleX = 0.1;
		object_06_coin_1_2.scaleY = 0.1;
		
		// object_06_coin_2
		const object_06_coin_2 = this.add.image(161, 515, "object_06_coin");
		object_06_coin_2.scaleX = 0.1;
		object_06_coin_2.scaleY = 0.1;
		
		// object_06_coin_3
		const object_06_coin_3 = this.add.image(755.7004871742979, 491.62218650215056, "object_06_coin");
		object_06_coin_3.scaleX = 0.1;
		object_06_coin_3.scaleY = 0.1;
		
		// object_06_coin_3_1
		const object_06_coin_3_1 = this.add.image(462, 492, "object_06_coin");
		object_06_coin_3_1.scaleX = 0.1;
		object_06_coin_3_1.scaleY = 0.1;
		
		// object_01_gem_blue
		const object_01_gem_blue = this.add.image(417, 516, "object_01_gem_blue");
		object_01_gem_blue.scaleX = 0.1;
		object_01_gem_blue.scaleY = 0.1;
		
		// object_03_gem_red
		const object_03_gem_red = this.add.image(865, 516, "object_03_gem_red");
		object_03_gem_red.scaleX = 0.1;
		object_03_gem_red.scaleY = 0.1;
		
		// object_02_gem_green
		const object_02_gem_green = this.add.image(673, 358, "object_02_gem_green");
		object_02_gem_green.scaleX = 0.1;
		object_02_gem_green.scaleY = 0.1;
		
		// object_06_coin_2_1
		const object_06_coin_2_1 = this.add.image(930.0017393318344, 515.7067015275796, "object_06_coin");
		object_06_coin_2_1.scaleX = 0.1;
		object_06_coin_2_1.scaleY = 0.1;
		
		// object_06_coin_1_1_2_1
		const object_06_coin_1_1_2_1 = this.add.image(1058.0017393318344, 515.7067015275796, "object_06_coin");
		object_06_coin_1_1_2_1.scaleX = 0.1;
		object_06_coin_1_1_2_1.scaleY = 0.1;
		
		// object_06_coin_1_1_1_1_1
		const object_06_coin_1_1_1_1_1 = this.add.image(1122.0017393318344, 515.7067015275796, "object_06_coin");
		object_06_coin_1_1_1_1_1.scaleX = 0.1;
		object_06_coin_1_1_1_1_1.scaleY = 0.1;
		
		// object_06_coin_1_2_1
		const object_06_coin_1_2_1 = this.add.image(994.0017393318344, 515.7067015275796, "object_06_coin");
		object_06_coin_1_2_1.scaleX = 0.1;
		object_06_coin_1_2_1.scaleY = 0.1;
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
