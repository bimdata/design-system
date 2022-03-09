/**
 * Parameters
 */

// Spotlight padding (in px)
const spotPadding = 16;
// offset spotlight border
const spotBorder = 2;
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

async function scrollToTarget(target, element) {
  const { x, y, w, h } = getElementCoord(target);
  const { wWindow, hWindow } = getWindowSize();

  let scroll = false;
  let left, top;

  if (x < 0 || x + w > wWindow) {
    scroll = true;
    left = x;
  }

  if (y < 0 || y + h > hWindow) {
    scroll = true;
    top = y;
  }

  if (scroll) {
    element.scroll({ top, left });
  }
}

function setSpotlightPosition(target, spotlight) {
  const { x, y, w, h } = getElementCoord(target);
  const { offsetXWindow, offsetYWindow } = getWindowScroll();

  Object.assign(spotlight.style, {
    left: `${offsetXWindow + x - spotPadding}px`,
    top: `${offsetYWindow + y - spotPadding}px`,
    width: `${w + 2 * spotPadding}px`,
    height: `${h + 2 * spotPadding}px`,
  });
}

function setTooltipPosition(target, tooltip) {
  const { x: xTarget, y: yTarget, w: wTarget, h: hTarget } = getElementCoord(
    target
  );
  const { w: wToolTip, h: hTooltip } = getElementCoord(tooltip);
  const { wWindow, hWindow } = getWindowSize();
  const { offsetXWindow, offsetYWindow } = getWindowScroll();

  let left, top;

  const leftTarget = offsetXWindow + xTarget;
  const wideTooltip = wToolTip + tooltipGap;

  const topTarget = offsetYWindow + yTarget;
  const highTarget = hTarget + spotPadding + spotBorder;
  const highTooltip = hTooltip + tooltipGap;

  const tooltipFitRight = leftTarget + wTarget + wideTooltip < wWindow;
  const tooltipFitLeft = wTarget + wideTooltip < wWindow;

  if (tooltipFitRight) {
    left = leftTarget + wTarget + spotPadding + tooltipGap;
  } else if (tooltipFitLeft) {
    left = leftTarget - wideTooltip - spotPadding;
  } else {
    left = xTarget - spotPadding - spotBorder;

    if (topTarget > highTooltip) {
      top = topTarget - highTooltip - spotBorder - tooltipGap;
    } else if (topTarget < highTooltip) {
      top = topTarget + highTarget + tooltipGap;
    }

    Object.assign(tooltip.style, {
      left: `${left}px`,
      top: `${top}px`,
    });

    return;
  }

  const tooltipFitByTop = topTarget + highTooltip < hWindow;
  const tooltipFitByBottom = topTarget + highTooltip >= hWindow;

  if (tooltipFitByTop) {
    top = topTarget - spotPadding - spotBorder;
  } else if (tooltipFitByBottom) {
    top = topTarget + highTarget - highTooltip + spotPadding;
  }

  Object.assign(tooltip.style, {
    left: `${left}px`,
    top: `${top}px`,
  });
}

export { scrollToTarget, setSpotlightPosition, setTooltipPosition };
