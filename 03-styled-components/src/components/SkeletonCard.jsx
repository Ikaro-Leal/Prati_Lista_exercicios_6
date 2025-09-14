import styled, { keyframes } from 'styled-components';

/* Animação shimmer para efeito de carregamento */
const shimmer = keyframes`
  100% { left: 150%; }
`;

const SkeletonWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden; display: flex; flex-direction: column;
`;

const SkeletonElement = styled.div`
  background-color: ${({ theme }) => theme.colors.border};
  position: relative; overflow: hidden;
  &::after {
    content: ''; position: absolute; top: 0; left: -150%;
    width: 150%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: ${shimmer} 1.5s infinite;
  }
`;

const SkeletonImage = styled(SkeletonElement)` aspect-ratio: 1 / 1; `;
const SkeletonContent = styled.div` padding: ${({ theme }) => theme.spacing.md}; display: flex; flex-direction: column; flex-grow: 1; `;
const SkeletonTitle = styled(SkeletonElement)` height: 2.5em; border-radius: ${({ theme }) => theme.borderRadius.sm}; `;
const SkeletonFooter = styled.div` display: flex; justify-content: space-between; margin: ${({ theme }) => theme.spacing.sm} 0 ${({ theme }) => theme.spacing.md}; `;
const SkeletonText = styled(SkeletonElement)` height: 1.5em; width: 40%; border-radius: ${({ theme }) => theme.borderRadius.sm}; `;
const SkeletonButton = styled(SkeletonElement)` height: 40px; margin-top: auto; border-radius: ${({ theme }) => theme.borderRadius.sm}; `;

/* SkeletonCard: placeholder visual durante o carregamento */
const SkeletonCard = () => (
  <SkeletonWrapper aria-hidden="true">
    <SkeletonImage />
    <SkeletonContent>
      <SkeletonTitle />
      <SkeletonFooter>
        <SkeletonText />
        <SkeletonText />
      </SkeletonFooter>
      <SkeletonButton />
    </SkeletonContent>
  </SkeletonWrapper>
);


export default SkeletonCard;
