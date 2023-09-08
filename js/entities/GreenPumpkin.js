class GreenPumpkin extends Npc {
    constructor() {
        super();
        this.hearts.quantity = 2;
        this.maxSpeed = 4;
        this.createElement("green-pumpkin harmful enemie");
    }
    update () {
        this.handleGravity();
        this.checkWallCollision();
        this.checkWeaponCollision();
        this.checkOutOfBounds(game.enemies);
        this.updateHearts();
        if (this.checkCloseToPlayer()) this.followPlayer()
        else this.autoMove();
        this.checkDeath();
    }
}