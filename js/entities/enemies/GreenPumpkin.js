class GreenPumpkin extends Npc {
    constructor() {
        super();
        this.hearts.quantity = 20;
        this.maxSpeed = 4;
        this.createElement("green-pumpkin harmful enemie");
        this.fly = false;
    }
    update () {
        this.handleGravity();
        this.checkWallCollision();
        this.checkWeaponCollision();
        this.checkOutOfBounds(game.enemies);
        this.updatePops();
        if (this.checkCloseToPlayer()) this.followPlayer()
        else this.autoMove();
        this.checkDeath();
    }
}