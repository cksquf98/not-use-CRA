import { useEffect, useState } from "react";
import { fetchLinkPreview } from "../../utils/fetchPreview";
import styled from "@emotion/styled";

export const LinkPreview = ({ url }: { url: string }) => {
  const [previewData, setPreviewData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPreview = async () => {
      try {
        const data = await fetchLinkPreview(encodeURIComponent(url));
        setPreviewData(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    getPreview();
  }, [url]);

  if (error) return <p>Error: {error}</p>;
  if (!previewData) return <p>Loading preview...</p>;

  return (
    <Wrapper>
      <h3>{previewData.title}</h3>
      <Text>{previewData.description}</Text>
      {previewData.image && (
        <img src={previewData.image} width={250} height={120} alt="Preview" />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border: 1px solid rgba(55, 53, 47, 0.16);
  cursor: pointer;
  flex-grow: 1;
  min-width: 0px;
  align-items: stretch;
  text-align: left;
  overflow: hidden;
`;

const Text = styled.div`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: keep-all; // 문단으로 끊어져서 줄바꿈 됨
`;
