import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'
import CookiesPanel from './components/CookiesPanel/index'

import './styles.global.css'

const FortuneCookiesAdmin: FC = () => {
  return (
    <Layout
      pageHeader={
        <PageHeader
          title={<FormattedMessage id="admin/fortune-cookies.title" />}
        />
      }
    >
      <PageBlock variation="full">
        <CookiesPanel />
      </PageBlock>
    </Layout>
  )
}

export default FortuneCookiesAdmin
