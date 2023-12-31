class Player extends Entity {
    constructor() {
        super();
        this.acceleration = 4.5;
        this.weight = 1.6;
        this.hearts = {
            quantity: 6,
            max: 6,
        };
        this.invincibility.max = 25;
        this.maxSpeed = 8;
        this.shoot = {
            active: false,
            duration: 5,
            force: this.acceleration,
            counter: 0,
            bullets: {
                actives: [],
                quantity: 10,
            },
        };
        this.coins = 0;
        this.jump = 20;
        this.axeAttack = {
            state: 0,
            maxFrames: 8,
            comboAttack: 1,
            axe: new Axe(),
        };
        this.slots = {
            slot1: { item: null, amount: 0 },
            slot2: { item: null, amount: 0 },
            slot3: { item: null, amount: 0 },
            slot4: { item: null, amount: 0 },
        };
    }

    update() {
        if (game.keys) {
            this.handleJumpAndRun();
            this.handleShooting();
            this.handleAxeAttack();
        }

        this.handleFrictionAndStop();
        this.handleHorizontalMovement();
        this.handleGravity();

        this.updateShootStatus();

        this.checkWallCollision();
        this.checkDropCollision();
        this.checkHarmfulCollision();

        this.updatePops();
        this.updateParticles();
    }

    checkDropCollision() {
        const drops = document.querySelectorAll(".drop");
        drops.forEach((drop) => {
            this.handleDropCollision(this.checkCollisionWith(drop));
        });
    }
    checkHarmfulCollision() {
        const harms = document.querySelectorAll(".harmful");
        harms.forEach((harm) => {
            this.handleHarm(this.checkCollisionWith(harm));
        });
        if (
            !this.invincibility.active 
        ) this.element.classList.remove("blinking");
    }

    handleDropCollision(
        collision = {
            element: HTMLElement.prototype,
            data: { x: Number, y: Number },
        }
    ) {
        if (collision) {
            const dropItem = game.drops.find((drop) => drop.element === collision.element);
            const pureType =  dropItem.type.replace(" mapDrop", "");
            this.popMessage({types:dropItem.type});
            console.log(pureType);
            switch (pureType) {
                case "coin": this.coins++; break;       
                case "coin": this.coins++; break;       
                case "bullet-load": this.shoot.bullets.quantity++; break;       
                default: break;
            };

            dropItem.element.classList.contains("mapDrop") && (
            game
            .maps[game.currentMap]
            .middle[dropItem.pos.y/50]
            [dropItem.pos.x/50] = " ");

            game.drawInterface();
            dropItem.destroy();
        }
    }

    handleJumpAndRun() {
        this.detectFloor();
        if (game.keys[65]) this.accelerateLeft();
        if (game.keys[68]) this.accelerateRight();
        if (game.keys[87]) this.handleJump();
    }

    handleShooting() {
        if (
            game.keys[75] &&
            !this.shoot.active &&
            this.shoot.bullets.quantity &&
            !this.axeAttack.state
        ) {
            this.vel.x -=
                this.shoot.force * (this.element.classList.contains("left") ? -1 : 1);
            this.shoot.active = true;
            this.element.classList.add("shooting");
            const newBullet = new Bullet(
                {
                    x:
                        parseInt(this.element.style.left) +
                        (this.element.classList.contains("left")
                            ? this.element.getBoundingClientRect().width
                            : 0),
                    y:
                        parseInt(this.element.style.top) +
                        this.element.getBoundingClientRect().height / 2,
                },
                this.element.classList.contains("left") ? -1 : 1
            );
            this.shoot.bullets.actives.push(newBullet);
            this.shoot.bullets.quantity--;
            game.drawInterface();
        }
    }
    handleAxeAttack() {
        if (this.axeAttack.state === this.axeAttack.maxFrames) {
            if (game.keys[74] && this.axeAttack.comboAttack === 1) this.vel.x += 5*this.dir;
            if (game.keys[74] && this.axeAttack.comboAttack < 2) {
                this.axeAttack.state = 1;
                this.axeAttack.comboAttack = 2;
                this.axeAttack.maxFrames = 8;
            } else {
                this.axeAttack.state = 0;
                this.axeAttack.comboAttack = 1;
                this.axeAttack.maxFrames = 6;
                this.element.classList.remove(
                    `attack-2-frame-8`,
                    `attack-1-frame-6`,
                    `attack-1-frame-8`,
                    `attack-2-frame-6`,
                );
            }
        }
        if ((game.keys[74] && !this.axeAttack.state) || this.axeAttack.state) {
            if (!this.axeAttack.axe.element) this.axeAttack.axe.createElememt();
            this.axeAttack.state++;
            this.axeAttack.axe.animation.state = this.axeAttack.state;
            this.axeAttack.axe.pos.x = parseInt(this.element.style.left);
            this.axeAttack.axe.pos.y = parseInt(this.element.style.top);
            this.axeAttack.axe.update();
        }
        if (this.axeAttack.state) {
            this.element.classList.remove(
                `attack-${this.axeAttack.comboAttack}-frame-${this.axeAttack.state - 1}`
            );
            this.element.classList.add(`attack-${this.axeAttack.comboAttack}-frame-${this.axeAttack.state}`);
        }
    }

    updateShootStatus() {
        if (!game.keys[75] || !this.shoot.bullets)
            this.element.classList.remove("shooting");
        if (this.shoot.active) {
            this.shoot.counter += 1;
            if (this.shoot.counter === this.shoot.duration) {
                this.shoot.counter = 0;
                this.shoot.active = false;
            }
        }
    }
}
