import * as crypto from 'crypto';

type UrlData = { shortUrl: string; longUrl: string };
const db: UrlData[] = [];

const generateShortUrl = (longUrl: string): string => {
  const md5Hash = crypto.createHash('md5').update(longUrl).digest('hex');
  const shortUrl = md5Hash.slice(0, 7);
  return shortUrl;
};

export const shortenUrl = async (longUrl: string) => {
  const shortUrl = generateShortUrl(longUrl);

  const longUrlExists = await getLongUrl(shortUrl);
  if (longUrlExists) {
    return shortUrl;
  }

  const data = { shortUrl, longUrl };

  db.push(data);

  return shortUrl;
};

export const getLongUrl = async (shortUrl: string) => {
  const longUrlRecord = db.find((r) => r.shortUrl === shortUrl);

  return longUrlRecord?.longUrl;
};
