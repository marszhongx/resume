import React from 'react';
import { LangSwitcher } from '@/components/LangSwitcher';
import { getMode, useModeSwitcher } from '@/hooks/useModeSwitcher';
import { FormattedMessage } from 'react-intl';
import './header.less';

const Header: React.FC = () => {
  const mode = getMode();
  const [ModeSwitcher] = useModeSwitcher({});

  function gotoOnlineVersion() {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('mode');
      window.open(url.toString());
    }
  }

  return (
    <header>
      <span />
      <span>
        {ModeSwitcher}
        {mode === 'read' && (
          <span className={'action-link'} onClick={() => window.print()}>
            <FormattedMessage id="下载 PDF" />
          </span>
        )}
        <span className={'action-link'} onClick={gotoOnlineVersion}>
          在线版本
        </span>
        <LangSwitcher />
      </span>
    </header>
  );
};

export default Header;
