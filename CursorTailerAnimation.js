(function(global) {
  function generateGradient(colors, numCircles) {
    const gradient = [];
    const segments = colors.length - 1;
    const circlesPerSegment = Math.floor(numCircles / segments);

    for (let i = 0; i < segments; i++) {
      const startColor = hexToRgb(colors[i]);
      const endColor = hexToRgb(colors[i + 1]);

      for (let j = 0; j < circlesPerSegment; j++) {
        const ratio = j / circlesPerSegment;
        const r = Math.round(startColor.r + (endColor.r - startColor.r) * ratio);
        const g = Math.round(startColor.g + (endColor.g - startColor.g) * ratio);
        const b = Math.round(startColor.b + (endColor.b - startColor.b) * ratio);
        gradient.push(`rgb(${r}, ${g}, ${b})`);
      }
    }

    while (gradient.length < numCircles) {
      const lastColor = hexToRgb(colors[colors.length - 1]);
      gradient.push(`rgb(${lastColor.r}, ${lastColor.g}, ${lastColor.b})`);
    }

    return gradient;
  }

  function hexToRgb(hex) {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }

  function CursorTailerAnimation(options) {
    const defaultColors = [
      "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
      "#ec805d", "#df685c", "#d5585c", "#d1525c", "#c5415d",
      "#c03b5d", "#b22c5e", "#ac265e", "#9c155f", "#950f5f",
      "#830060", "#7c0060", "#680060", "#60005f", "#48005f",
      "#3d005e"
    ];

    const defaultOptions = {
      numCircles: 25,
      colors: defaultColors,
      fadingTime: 200,
      movementFactor: 0.2,
      cursorOffset: { x: 20, y: 20 },
      circleHeight: '24px',
      circleWidth: '24px',
      circleBorderRadius: '24px',
      speedThreshold: 0.15
    };

    this.options = { ...defaultOptions, ...options };

    if (!options || !options.colors) {
      this.options.colors = defaultColors;
    }

    this.init();
  }

  CursorTailerAnimation.prototype.init = function() {
    if (CursorTailerAnimation.instance) {
      console.warn("CursorTailerAnimation instance already exists.");
      return;
    }

    CursorTailerAnimation.instance = this;

    this.circles = [];
    this.coords = { x: 0, y: 0, prevX: 0, prevY: 0, speed: 0 };
    this.lastMoveTime = 0;
    this.isMoving = false;
    this.fadeOutTimeout = null;

    this.colors = generateGradient(this.options.colors, this.options.numCircles);

    for (let i = 0; i < this.options.numCircles; i++) {
      const circle = document.createElement('div');
      circle.style.height = this.options.circleHeight;
      circle.style.width = this.options.circleWidth;
      circle.style.borderRadius = this.options.circleBorderRadius;
      circle.style.backgroundColor = this.colors[i];
      circle.style.position = 'fixed';
      circle.style.top = '0';
      circle.style.left = '0';
      circle.style.pointerEvents = 'none';
      circle.style.zIndex = '99999999';
      circle.style.opacity = 0;
      document.body.appendChild(circle);
      this.circles.push(circle);
    }

    window.addEventListener("mousemove", (e) => this.handleMouseMove(e));
    requestAnimationFrame(() => this.animateCircles());
  };

  CursorTailerAnimation.prototype.handleMouseMove = function(e) {
    this.coords.x = e.clientX + this.options.cursorOffset.x;
    this.coords.y = e.clientY + this.options.cursorOffset.y;

    const currentTime = Date.now();
    const deltaX = this.coords.x - this.coords.prevX;
    const deltaY = this.coords.y - this.coords.prevY;
    const timeDiff = currentTime - this.lastMoveTime;

    this.coords.speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / timeDiff;

    this.coords.prevX = this.coords.x;
    this.coords.prevY = this.coords.y;
    this.lastMoveTime = currentTime;

    if (this.coords.speed > this.options.speedThreshold) {
      this.isMoving = true;
      clearTimeout(this.fadeOutTimeout);
    } else {
      this.isMoving = false;
      this.fadeOutTimeout = setTimeout(() => {
        this.isMoving = false;
      }, this.options.fadingTime);
    }
  };

  CursorTailerAnimation.prototype.animateCircles = function() {
    let x = this.coords.x;
    let y = this.coords.y;

    this.circles.forEach((circle, index) => {
      circle.style.left = x - parseFloat(this.options.circleWidth) / 2 + "px";
      circle.style.top = y - parseFloat(this.options.circleHeight) / 2 + "px";
      circle.style.transform = `scale(${(this.options.numCircles - index) / this.options.numCircles})`;

      if (this.isMoving) {
        circle.style.opacity = Math.min(1, parseFloat(circle.style.opacity) + 0.05);
      } else {
        circle.style.opacity = Math.max(0, parseFloat(circle.style.opacity) - 0.05);
      }

      const nextCircle = this.circles[index + 1] || this.circles[0];
      x += (nextCircle.offsetLeft + parseFloat(this.options.circleWidth) / 2 - x) * this.options.movementFactor;
      y += (nextCircle.offsetTop + parseFloat(this.options.circleHeight) / 2 - y) * this.options.movementFactor;
    });

    requestAnimationFrame(() => this.animateCircles());
  };

  global.CursorTailerAnimation = CursorTailerAnimation;
})(window);
