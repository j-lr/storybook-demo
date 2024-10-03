import { TextElement } from "../types/textElement";

const measureText = (element: HTMLElement, fontSize: number) => {
  const temporaryElement = document.createElement(element.tagName);
  const computedStyle = getComputedStyle(element);

  temporaryElement.style.display = "inline-block"; // important, without it width remain stuck on same value, even though font size is reduced
  temporaryElement.style.fontSize = `${fontSize}px`;
  temporaryElement.style.fontFamily = computedStyle.fontFamily;
  temporaryElement.style.fontWeight = computedStyle.fontWeight;
  temporaryElement.style.letterSpacing = computedStyle.letterSpacing;

  document.body.appendChild(temporaryElement);
  temporaryElement.innerText = element.innerText;

  const width = temporaryElement.offsetWidth;
  const height = temporaryElement.offsetHeight;
  document.body.removeChild(temporaryElement);
  return { width, height };
};

/**
 * Reduces the font size of the text within a given HTML element until it fits within the specified width and height.
 *
 * @param element - The HTML element containing the text to be resized.
 * @param width - The maximum allowable width for the text.
 * @param height - The maximum allowable height for the text.
 * @returns The adjusted font size that fits within the specified dimensions.
 *
 * @remarks
 * This function iteratively decreases the font size of the text within the provided HTML element until the text fits
 * within the given width and height constraints. It stops reducing the font size when the text fits or when the font
 * size reaches zero.
 *
 * @todo Handle edge cases such as when width or height is less than or equal to zero. Consider adding minimum width and height constraints.
 * @todo Add unit tests for this function.
 * @todo Add error handling for cases where the element is not a text element.
 * @todo Add error handling for cases where the element does not contain any text.
 * @todo Add error handling for cases where the element is not attached to the DOM.
 * @todo : perf-- If initial font size is very large, then decrease font size by a larger amount, instead of 1 by 1

 */
export const reduceFontSizeToFit = (
  element: TextElement,
  width: number,
  height: number
): number => {
  const computedStyle = getComputedStyle(element);

  const fontSize = parseFloat(computedStyle.fontSize);

  let currentFontSize = fontSize;
  //todo: handle edge cases, like what if width <=0 or height <=0 and may be also add min width and minHeight

  let w, h;

  do {
    const dimens = measureText(element, currentFontSize);
    w = dimens.width;
    h = dimens.height;
    --currentFontSize;
  } while ((w >= width || h >= height) && currentFontSize > 0);

  return currentFontSize;
};

/**
 * Capitalizes the first letter of a given word.
 *
 * @param word - The word to capitalize.
 * @returns The word with the first letter capitalized. If the input is an empty string or null, it returns the input as is.
 * @todo Add unit tests for this function.
 */
export const capitalizeFirstLetter = (word: string): string => {
  if (!word) return word;
  if (word.length === 0) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
};
