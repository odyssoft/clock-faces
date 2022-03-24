export const getRGBA = (color: string) => {
  const [r, g, b, a] = color
    .replace(/rgb.\(|\)/g, '')
    .split(',')
    .map((num: string): number => Number(num))
  return { a, r, g, b }
}

export const getHSLA = (color: string) => {
  const [h, s, l, a] = color
    .replace(/hsl.\(|\)|%/g, '')
    .split(',')
    .map((num: string): number => Number(num))
  return { a, h, s, l }
}

export const HexToRgba = (color: string) => {
  //  @ts-ignore
  const [a, r, g, b] = color
    .match(/([\da-f]{2})([\da-f]{2})([\da-f]{2})/i)
    ?.map((col: string) => parseInt(col, 16))
  return { r, g, b, a: 1 }
}

export const RgbaToHsla = ({ r, g, b, a }: any) => {
  r /= 255
  g /= 255
  b /= 255
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  var h = 0,
    s = 0,
    l = (max + min) / 2

  if (max == min) {
    h = s = 0 // achromatic
  } else {
    var d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return {
    h: Math.floor(h * 360),
    s: Math.floor(s * 100),
    l: Math.floor(l * 100),
    a: a ?? 1,
  }
}

export const HslaToHex = ({ h, s, l }: any) => {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0') // convert to Hex and prefix "0" if needed
  }
  return `#${f(0)}${f(8)}${f(4)}`
}
