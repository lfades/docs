import Wrapper from '../wrapper'
import { HEADER_HEIGHT } from '~/lib/constants'

const Header = ({
  className,
  hideHeader,
  dynamicSearch,
  hideHeaderSearch = true,
  children,
  isTop,
  inHero
}) => (
  <header className={className}>
    <Wrapper className="content">{children}</Wrapper>
    <style jsx>{`
      header {
        position: absolute;
        height: ${HEADER_HEIGHT}px;
        width: 100%;
        z-index: 1000;
        top: 0;
      }

      header > :global(.content) {
        align-items: center;
        display: flex;
        height: 100%;
      }
    `}</style>
    <style jsx>{`
      header {
        position: ${hideHeaderSearch && dynamicSearch ? 'absolute' : 'fixed'};
        top: ${hideHeader && dynamicSearch ? '-80px' : '0'};
        background: ${hideHeaderSearch && dynamicSearch
          ? 'transparent'
          : '#fff'};
        border-bottom: ${hideHeaderSearch && dynamicSearch
          ? ''
          : '1px solid #eaeaea'};
        transition: all 0.2s ease;
      }

      @media (max-width: 640px) {
        header {
          position: fixed;
          top: ${hideHeader && dynamicSearch ? '-80px' : '0'};
          background: ${isTop && dynamicSearch ? 'transparent' : '#fff'};
          border-bottom: ${isTop && dynamicSearch
            ? '1px solid transparent'
            : '1px solid #eaeaea'};
        }
      }
    `}</style>
  </header>
)

export default Header
