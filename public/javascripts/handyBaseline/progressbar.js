/*
 *
 * Circular progress bar
 *
 */

class circularProgressBar {
    constructor(options) {
        this.id = options.id;
        this.r = 20; // (exclude border width)
        this.w = 4;
        this.outerRadius = this.r + this.w;
        this.boxWidth = this.outerRadius * 2;
        this.circumference = 2 * Math.PI * this.outerRadius;
    }

    init() {
        this.els = document.getElementById(this.id);
        this.els.classList.add('svg');
        this.els.classList.add('circular-progress');

        let svg = this.createSVG();
        let background = this.createCircle("background");
        let cover = this.createCircle("cover");
        let center = this.createCircle("center");

        svg.appendChild(background);
        svg.appendChild(cover);
        svg.appendChild(center);
        this.els.appendChild(svg);
    }

    createSVG() {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("height", `${this.boxWidth}px`);
        svg.setAttribute("width", `${this.boxWidth}px`);
        return svg;
    }

    createCircle(type) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        let r;
        if (type === "center") {
            r = `${this.r}px`;
        } else if (type === "cover") {
            // remove residue border
            r = `${this.r + this.w / 2 + 1}px`;
        } else {
            r = `${this.r + this.w / 2}px`;
        }
        circle.id = `${this.id}_circular-progress-${type}`
        circle.classList.add(`circular-progress-${type}`)
        circle.setAttribute("r", r);
        circle.setAttribute("cx", `${this.outerRadius}px`);
        circle.setAttribute("cy", `${this.outerRadius}px`);
        circle.setAttribute("fill", 'transparent');
        circle.setAttribute("stroke-dasharray", `${this.circumference}px`);
        circle.setAttribute("stroke-dashoffset", '0');
        return circle;
    }

    update(percent) {
        if (percent < 0 || percent > 1) { return }
        let offset = -(this.circumference * percent) + 'px';
        document.getElementById(`${this.id}_circular-progress-cover`).setAttribute('stroke-dashoffset', offset);
    }

    infinite() {
        let offset = -(this.circumference * 0.6) + 'px';
        let cover = document.getElementById(`${this.id}_circular-progress-cover`);
        cover.setAttribute('stroke-dashoffset', offset);
        cover.classList.add('infinite');
    }

    toggleInfinite() {
        let cover = document.getElementById(`${this.id}_circular-progress-cover`);
        let isPaused = false;
        cover.classList.forEach(c => {
            if (c === "paused") {
                isPaused = true;
            };
        });
        if (isPaused) {
            cover.classList.remove("paused");
        } else {
            cover.classList.add("paused");
        }
    }

    reset() {
        let cover = document.getElementById(`${this.id}_circular-progress-cover`);
        cover.classList.remove('paused');
        cover.classList.remove('infinite');
    }
}
