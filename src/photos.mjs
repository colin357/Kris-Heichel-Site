// Photo credits for Wikimedia Commons images (shown on /photo-credits and as captions).
export const PHOTOS = {
  'rochester-skyline': {"alt": "Downtown Rochester and the Zumbro River from above", "author": "Wikideas1", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Rochester_Minnesota_Skyline_06.jpg"},
  'rochester-skyline-wide': {"alt": "Rochester, Minnesota skyline", "author": "Wikideas1", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Rochester_Minnesota_Skyline_04.jpg"},
  'austin-autumn-street': {"alt": "Fall color on a residential street in northwest Austin", "author": "Darb02", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Autumn_in_Northwest_Austin.jpg"},
  'austin-downtown': {"alt": "Main Street in downtown Austin, looking south", "author": "Darb02", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Downtown_Austin_MN_looking_south.jpg"},
  'austin-main-street': {"alt": "Main Street North at 4th Avenue NW, Austin", "author": "Myotus", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Main_Street_N_at_4th_Ave_NW,_Austin,_Minnesota.jpg"},
  'albert-lea-aerial': {"alt": "Albert Lea and its lakes from above", "author": "Wikideas1", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Albert_Lea,_Minnesota.jpg"},
  'albert-lea-fountain-lake': {"alt": "Fishing on Fountain Lake in Albert Lea", "author": "ed.majesty", "license": "CC BY 3.0", "licenseUrl": "https://creativecommons.org/licenses/by/3.0", "source": "https://commons.wikimedia.org/wiki/File:Fishing_on_Fountain_Lake_-_panoramio.jpg"},
  'albert-lea-lake': {"alt": "Albert Lea Lake from Myre-Big Island State Park", "author": "MarkTraceur", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Albert_Lea_Lake_from_Myre-Big_Island_State_Park.jpg"},
  'owatonna-cedar-avenue': {"alt": "Businesses on Cedar Avenue in downtown Owatonna", "author": "Myotus", "license": "CC BY 4.0", "licenseUrl": "https://creativecommons.org/licenses/by/4.0", "source": "https://commons.wikimedia.org/wiki/File:20230822_-_Businesses_on_Cedar_Avenue,_Owatonna,_MN.jpg"},
};

export const credit = (k) => {
  const p = PHOTOS[k];
  if (!p) return '';
  const lic = p.licenseUrl ? `<a href="${p.licenseUrl}" target="_blank" rel="noopener license">${p.license}</a>` : p.license;
  return `Photo: <a href="${p.source}" target="_blank" rel="noopener">${p.author}</a>, ${lic}, via Wikimedia Commons`;
};
