function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };
        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        };
        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.monitor.manufacturer === this.keyboard.manufacturer;
        };
        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife > 2
                ? ((this.color === 'Silver' || this.color === 'Black')
                    && (this.weight < 3)) : false;
        };
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}
