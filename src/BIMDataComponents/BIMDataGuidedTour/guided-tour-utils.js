/* eslint-disable */

/**
 * Parameters
 */

// Spotlight padding (in px)
const spotPadding = 16;
// Tooltip gap (in px)
const tooltipGap = 4;
// Minimum border gap (in px)
const borderGap = 8;

/**
 * Internal utility functions
 */

function getElementCoord(elem) {
  const { x, y, width: w, height: h } = elem.getBoundingClientRect();
  return { x, y, w, h };
}

function getWindowSize() {
  return {
    W: window.innerWidth,
    H: window.innerHeight
  };
}

function getWindowScroll() {
  return {
    sX: window.pageXOffset,
    sY: window.pageYOffset
  };
}

function scrollTo({ top, left }, delay = 100) {
  return new Promise(resolve => {
    let timeout = null;
    const scrollHandler = event => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        window.removeEventListener("scroll", scrollHandler);
        resolve(event);
      }, delay);
    };

    window.addEventListener("scroll", scrollHandler);
    window.scroll({ left, top, behavior: 'smooth' });
  });
}

/**
 * Exported utility functions
 */

async function scrollToTarget(target) {
  const { x, y, w, h } = getElementCoord(target);
  const { W, H } = getWindowSize();

  let scroll = false;
  let left, top;

  if (x < 0 || x + w > W) {
    scroll = true;
    left = x;
  }

  if (y < 0 || y + h > H) {
    scroll = true;
    top = y;
  }

  if (scroll) {
    await scrollTo({ top, left });
  }
}

function setSpotlightPosition(target, spotlight) {
  const { x, y, w, h } = getElementCoord(target);
  const { sX, sY } = getWindowScroll();

  Object.assign(spotlight.style, {
    left: `${sX + x - spotPadding}px`,
    top: `${sY + y - spotPadding}px`,
    width: `${w + 2 * spotPadding}px`,
    height: `${h + 2 * spotPadding}px`
  });
}

function setTooltipPosition(target, tooltip) {
  const { x, y, w, h } = getElementCoord(target);
  const { w: wt, h: ht } = getElementCoord(tooltip);
  const { W, H } = getWindowSize();
  const { sX, sY } = getWindowScroll();

  let left = sX + x + w + spotPadding + tooltipGap;
  if (left + wt + borderGap > W) {
    left = sX + x - wt - spotPadding - tooltipGap;
  }

  let top = sY + y;
  if (top + ht + borderGap > H) {
    top = sY + y + h - ht;
  }

  Object.assign(tooltip.style, {
    left: `${left}px`,
    top: `${top}px`
  });
}

export {
  scrollToTarget,
  setSpotlightPosition,
  setTooltipPosition
};