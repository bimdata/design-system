/**
 * Parameters
 */

// Spotlight padding (in px)
const spotPaddingInitalValue = 16;
let spotPadding;
// offset spotlight border
// const spotBorder = 2;
// Tooltip gap (in px)
const tooltipGap = 13;

/**
 * Internal utility functions
 */

function getElementCoord(elem) {
  let x, y, w, h;

  if (Array.isArray(elem)) {
    let widestXW, highestYH;

    elem.map(e => {
      const {
        x: currentX,
        y: currentY,
        width: currentW,
        height: currentH,
      } = e.getBoundingClientRect();

      if (!widestXW || widestXW < currentX + currentW) {
        widestXW = currentX + currentW;
      }

      if (!highestYH || highestYH < currentY + currentH) {
        highestYH = currentY + currentH;
      }

      if (!x || x > currentX) {
        x = currentX;
      }

      if (!y || y > currentY) {
        y = currentY;
      }

      w = widestXW - x;
      h = highestYH - y;
    });
  } else {
    const {
      x: currentX,
      y: currentY,
      width: currentW,
      height: currentH,
    } = elem.getBoundingClientRect();

    x = currentX;
    y = currentY;
    w = currentW;
    h = currentH;
  }
  return { x, y, w, h };
}

function getWindowSize() {
  return {
    wWindow: window.innerWidth,
    hWindow: window.innerHeight,
  };
}

function getWindowScroll() {
  return {
    offsetXWindow: window.pageXOffset,
    offsetYWindow: window.pageYOffset,
  };
}

/**
 * Exported utility functions
 */

function isNegative(num) {
  return Math.sign(num) === -1;
}

async function scrollToTarget(target, element, spotlightOffset) {
  const { y, h } = getElementCoord(target);
  const { hWindow } = getWindowSize();

  const offsetYElement = element.offsetTop;
  const scrolledTop = element.scrollTop;

  spotPadding = spotlightOffset ? spotPaddingInitalValue : 0;

  console.log("y", y);
  console.log("h", h);
  console.log("hWindow", hWindow);
  console.log("offsethElement", offsetYElement);
  console.log("scrolledTop", scrolledTop);

  if (isNegative(y)) {
    console.log("isNegative", scrolledTop + y - spotPadding - tooltipGap);
    element.scroll({
      top: scrolledTop + y - spotPadding - tooltipGap,
    });
  }

  if (y < offsetYElement) {
    element.scroll({
      top: scrolledTop + y - offsetYElement - spotPadding - tooltipGap,
    });
  }

  if (y + h > hWindow) {
    element.scroll({
      top: y + h - hWindow + scrolledTop + spotPadding + tooltipGap,
    });
  }
}

function setSpotlightPosition(target, spotlight, spotlightOffset) {
  const { x, y, w, h } = getElementCoord(target);
  const { offsetXWindow, offsetYWindow } = getWindowScroll();

  spotPadding = spotlightOffset ? spotPaddingInitalValue : 0;

  Object.assign(spotlight.style, {
    left: `${offsetXWindow + x - spotPadding}px`,
    top: `${offsetYWindow + y - spotPadding}px`,
    width: `${w + 2 * spotPadding}px`,
    height: `${h + 2 * spotPadding}px`,
  });
}

function setSpotlightPositionClickable(target, spotlight, spotlightOffset) {
  const { x, y, w, h } = getElementCoord(target);
  const { offsetXWindow, offsetYWindow } = getWindowScroll();
  spotPadding = spotlightOffset ? spotPaddingInitalValue : 0;

  Object.assign(spotlight.style, {
    clipPath: `polygon(
        ${offsetXWindow + x - spotPadding}px /* X top left */
        ${offsetYWindow + y - spotPadding}px /* Y top left */,
        ${offsetXWindow + x - spotPadding}px /* X bottom left */ 
        ${offsetYWindow + y + h + spotPadding}px /* Y bottom  */, 
        0 100%, 
        0 0, 
        100% 0, 
        100% 100%, 
        0 100%,
        0% 
        ${offsetYWindow + y + h + spotPadding}px /* Y bottom  */, 
        ${offsetXWindow + x + w + spotPadding}px /* X bottom right */ 
        ${offsetYWindow + y + h + spotPadding}px /* Y bottom  */,
        ${offsetXWindow + x + w + spotPadding}px /* X top right */ 
        ${offsetYWindow + y - spotPadding}px /* Y top right */
      )`,
    backgroundColor: "rgba(0,0,0,0.5)",
  });
}

function setTooltipPosition(target, tooltip, spotlightOffset) {
  const { x: xTarget, y: yTarget, w: wTarget, h: hTarget } = getElementCoord(
    target
  );

  const { w: wToolTip, h: hTooltip } = getElementCoord(tooltip);
  const { wWindow, hWindow } = getWindowSize();
  const { offsetXWindow, offsetYWindow } = getWindowScroll();

  spotPadding = spotlightOffset ? spotPaddingInitalValue : 0;

  let left, top;

  const leftTarget = offsetXWindow + xTarget;
  const wideTooltip = wToolTip + tooltipGap;

  const topTarget = offsetYWindow + yTarget;
  const highTarget = hTarget + spotPadding;
  const highTooltip = hTooltip + tooltipGap;

  const tooltipFitRight = wWindow - (leftTarget + wTarget) > wideTooltip;
  const tooltipFitLeft = leftTarget > wideTooltip;

  if (tooltipFitRight) {
    left = leftTarget + wTarget + spotPadding + tooltipGap;

    // align bottom
    if (hWindow - topTarget - highTarget < highTooltip - highTarget) {
      top = topTarget + highTarget - highTooltip + spotPadding;
      // align top
    } else {
      top = topTarget - spotPadding;
    }

    Object.assign(tooltip.style, {
      left: `${left}px`,
      top: `${top}px`,
    });
    return;
  }

  if (tooltipFitLeft) {
    left = leftTarget - wideTooltip - spotPadding;

    // align bottom
    if (hWindow - topTarget - highTarget < highTooltip - highTarget) {
      top = topTarget + highTarget - highTooltip + spotPadding;
      // align top
    } else {
      top = topTarget - spotPadding;
    }
    Object.assign(tooltip.style, {
      left: `${left}px`,
      top: `${top}px`,
    });
    return;
  }

  const tooltipFitTop = highTooltip < topTarget - tooltipGap;
  const tooltipFitBottom = hWindow - (topTarget + highTarget) > highTooltip;

  if (tooltipFitTop) {
    Object.assign(tooltip.style, {
      left: `${leftTarget - spotPadding}px`,
      top: `${topTarget - spotPadding - highTooltip}px`,
    });
    return;
  }

  if (tooltipFitBottom) {
    Object.assign(tooltip.style, {
      left: `${leftTarget - spotPadding}px`,
      top: `${topTarget + highTarget + spotPadding}px`,
    });
    return;
  }

  // tooltip in element
  Object.assign(tooltip.style, {
    left: `${leftTarget + wTarget - wToolTip}px`,
    top: `${topTarget + highTarget - highTooltip}px`,
  });
}

export {
  scrollToTarget,
  setSpotlightPosition,
  setSpotlightPositionClickable,
  setTooltipPosition,
};
