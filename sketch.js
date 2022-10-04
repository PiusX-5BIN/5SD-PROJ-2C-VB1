let huidigeFrame = 0;

function setup() {
    createCanvas(400,400);
}

function draw() {
    background(200);
    if (huidigeFrame == 0) {
        background(200, 0, 0);
        fill("#f99621");
        arc(70, 380, 200, 200, PI * 4/3, PI * 5/3);
        noFill();
        stroke("#d17728");
        strokeWeight(16);
        arc(70, 380, 200, 200, PI * 4/3, PI * 5/3, OPEN);
        noStroke();
        fill("#bc1f28");
        circle(70+2, 380-20, 15);
        circle(70-10, 380-40, 15);
        circle(70+10, 380-60, 20);
        circle(70-15, 380-70, 18);
        circle(70+20, 380-80, 15);
        noFill();
        stroke("#000");
        strokeWeight(2);
        arc(70, 380-50, 50, 50, PI * 1/3, PI * 2/3, OPEN);
        noStroke();
        fill(255);
        circle(70+15, 380-60, 20);
        circle(70-15, 380-60, 20);
        fill(0);
        circle(70+15, 380-60, 5);
        circle(70 - 15, 380 - 60, 5);
        fill("#f99621");
        arc(270, 380, 200, 200, PI * 4/3, PI * 5/3);
        noFill();
        stroke("#d17728");
        strokeWeight(16);
        arc(270, 380, 200, 200, PI * 4/3, PI * 5/3, OPEN);
        noStroke();
        fill("#bc1f28");
        circle(270+2, 380-20, 15);
        circle(270-10, 380-40, 15);
        circle(270+10, 380-60, 20);
        circle(270-15, 380-70, 18);
        circle(270+20, 380-80, 15);
        noFill();
        stroke("#000");
        strokeWeight(2);
        arc(270, 380-50, 50, 50, PI * 1/3, PI * 2/3, OPEN);
        noStroke();
        fill(255);
        circle(270+15, 380-60, 20);
        circle(270-15, 380-60, 20);
        fill(0);
        circle(270+15, 380-60, 5);
        circle(270-15, 380-60, 5);
    }
    else if (huidigeFrame == 1) {
        background(220, 50, 0);
        TekenTekstballon(140, 230, 200, 50, .25, "Amai, vind jij het hier ook niet te warm?");
        fill("#f99621");
        arc(70, 380, 200, 200, PI * 4/3, PI * 5/3);
        noFill();
        stroke("#d17728");
        strokeWeight(16);
        arc(70, 380, 200, 200, PI * 4/3, PI * 5/3, OPEN);
        noStroke();
        fill("#bc1f28");
        circle(70+2, 380-20, 15);
        circle(70-10, 380-40, 15);
        circle(70+10, 380-60, 20);
        circle(70-15, 380-70, 18);
        circle(70+20, 380-80, 15);
        noFill();
        stroke("#000");
        strokeWeight(2);
        arc(70, 380-50, 50, 50, PI * 1/3, PI * 2/3, OPEN);
        noStroke();
        fill(255);
        circle(70+15, 380-60, 20);
        circle(70-15, 380-60, 20);
        fill(0);
        circle(70+15, 380-60, 5);
        circle(70 - 15, 380 - 60, 5);
        fill("#f99621");
        arc(270, 380, 200, 200, PI * 4/3, PI * 5/3);
        noFill();
        stroke("#d17728");
        strokeWeight(16);
        arc(270, 380, 200, 200, PI * 4/3, PI * 5/3, OPEN);
        noStroke();
        fill("#bc1f28");
        circle(270+2, 380-20, 15);
        circle(270-10, 380-40, 15);
        circle(270+10, 380-60, 20);
        circle(270-15, 380-70, 18);
        circle(270+20, 380-80, 15);
        noFill();
        stroke("#000");
        strokeWeight(2);
        arc(270, 380-50, 50, 50, PI * 1/3, PI * 2/3, OPEN);
        noStroke();
        fill(255);
        circle(270+15, 380-60, 20);
        circle(270-15, 380-60, 20);
        fill(0);
        circle(270+15, 380-60, 5);
        circle(270-15, 380-60, 5);
    }
    else if (huidigeFrame == 2) {
        background(180, 0, 0);
        TekenTekstballon(180, 230, 200, 50, .75, "AAH! EEN SPREKENDE PIZZA!");
        fill("#f99621");
        arc(70, 380, 200, 200, PI * 4/3, PI * 5/3);
        noFill();
        stroke("#d17728");
        strokeWeight(16);
        arc(70, 380, 200, 200, PI * 4/3, PI * 5/3, OPEN);
        noStroke();
        fill("#bc1f28");
        circle(70+2, 380-20, 15);
        circle(70-10, 380-40, 15);
        circle(70+10, 380-60, 20);
        circle(70-15, 380-70, 18);
        circle(70+20, 380-80, 15);
        noFill();
        stroke("#000");
        strokeWeight(2);
        arc(70, 380-50, 50, 50, PI * 1/3, PI * 2/3, OPEN);
        noStroke();
        fill(255);
        circle(70+15, 380-60, 20);
        circle(70-15, 380-60, 20);
        fill(0);
        circle(70+15, 380-60, 5);
        circle(70 - 15, 380 - 60, 5);
        fill("#f99621");
        arc(270, 380, 200, 200, PI * 4/3, PI * 5/3);
        noFill();
        stroke("#d17728");
        strokeWeight(16);
        arc(270, 380, 200, 200, PI * 4/3, PI * 5/3, OPEN);
        noStroke();
        fill("#bc1f28");
        circle(270+2, 380-20, 15);
        circle(270-10, 380-40, 15);
        circle(270+10, 380-60, 20);
        circle(270-15, 380-70, 18);
        circle(270+20, 380-80, 15);
        noFill();
        stroke("#000");
        strokeWeight(2);
        arc(270, 380-50, 50, 50, PI * 1/3, PI * 2/3, OPEN);
        noStroke();
        fill(255);
        circle(270+15, 380-60, 20);
        circle(270-15, 380-60, 20);
        fill(0);
        circle(270+15, 380-60, 5);
        circle(270-15, 380-60, 5);
    }
}

/**
 * Tekent een tekstballon.
 * @param {number} x: de x-positie van de tekstballon
 * @param {number} y: de y-positie van de tekstballon
 * @param {number} breedte: de breedte van de tekstballon. Dit bepaalt ook hoeveel ruimte er is voor de tekst.
 * @param {number} hoogte: de hoogte van de tekstballon. Dit bepaalt ook hoeveel ruimte er is voor de tekst.
 * @param {number} aanhangselOffset: waarde tussen 0 en 1, die zegt waar het aanhangsel naartoe wijst. 0 is links, 1 is rechts.
 * @param {string} tekst: de tekst die getoond wordt in de tekstballon.
 */
function TekenTekstballon(x, y, breedte, hoogte, aanhangselOffset, tekst) {
    // verander aanhangselOffset van een waarde tussen 0 en 1 naar een werkelijke pixel-waarde
    aanhangselOffset = breedte * (aanhangselOffset - .5) * -1;

    // teken de omtrek van het aanhangsel
    strokeWeight(1);
    stroke(0);
    noFill();
    triangle(x + 25, y, x - (aanhangselOffset), y + hoogte * 2/3, x - 25, y);
    
    // teken de ballon
    fill(255);
    textAlign(CENTER);
    ellipse(x, y, breedte, hoogte);

    // teken het aanhangsel zelf, zonder omtrek
    // op deze manier wordt de omtrek van de ballon onderbroken. Dit ziet er gewoon mooier uit.
    noStroke();
    fill(255);
    triangle(x + 25, y, x - (aanhangselOffset), y + hoogte * 2/3, x - 25, y);

    // teken de tekst.
    fill(0);
    text(tekst, x - breedte / 3, y - hoogte / 3, breedte * 2/3, hoogte * 2/3);
}