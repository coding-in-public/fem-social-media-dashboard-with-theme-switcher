const formatNumberWithCommas = (num: number) => new Intl.NumberFormat().format(num);

const formatNumberWithThousands = (num: number) => new Intl.NumberFormat("en-us", { notation: "compact", }).format(num);

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export { formatNumberWithCommas, formatNumberWithThousands, slugify };