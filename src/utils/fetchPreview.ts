export const fetchLinkPreview = async (url: string): Promise<any> => {
  const response = await fetch(
    `https://api.linkpreview.net/?key=72d629b30172fccab0a5a98e4305c6df&q=${encodeURIComponent(url)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch link preview");
  }

  const data = await response.json();
  return data;
};
