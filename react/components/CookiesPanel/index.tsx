import React, { useState } from 'react'
import {
  Button,
  Input,
  Spinner,
  Table,
  IconDelete,
} from 'vtex.styleguide'
import { useIntl } from 'react-intl'

import { useFortuneCookies } from '../../hooks/useFortuneCookies'
import { FortuneCookie } from '../../typings/FortuneCookie'

const ITEMS_PER_PAGE = 10

const CookiesPanel: React.FC = () => {
  const { data, loading, error, add, del } = useFortuneCookies()
  const [text, setText] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(ITEMS_PER_PAGE)
  const intl = useIntl()

  const schema = {
    properties: {
      text: {
        title: intl.formatMessage({ id: 'admin/fortune-cookies.phrase-column' }),
        width: 800,
        cellRenderer: ({ rowData }: { rowData: FortuneCookie }) => (
          <span>{rowData.text}</span>
        ),
      },
      actions: {
        title: intl.formatMessage({ id: 'admin/fortune-cookies.actions-column' }),
        width: 90,
        cellRenderer: ({ rowData }: { rowData: FortuneCookie }) => (
          <div className="flex justify-center items-center">
            <Button
              variation="danger"
              icon={<IconDelete />}
              size="small"
              onClick={() => del(rowData.id)}
            >
              <IconDelete />
            </Button>
          </div>
        ),
      },
    },
  } as const

  const tableLength = data?.length || 0
  const from = (currentPage - 1) * itemsPerPage
  const to = Math.min(currentPage * itemsPerPage, tableLength)
  const currentItems = data?.slice(from, to) || []

  if (loading) return <Spinner />

  return (
    <>
      {error && <div className="c-danger mb4">{error}</div>}

      <div className="mb5 flex items-center">
        <Input
          value={text}
          placeholder={intl.formatMessage({ id: 'admin/fortune-cookies.new-phrase-placeholder' })}
          onChange={(e: any) => setText(e.target.value)}
          size="medium"
          className="w-80"
        />
        <div className="ph4">
          <Button
            onClick={() => {
              add(text)
              setText('')
            }}
            disabled={!text}
          >
            {intl.formatMessage({ id: 'admin/fortune-cookies.create-button' })}
          </Button>
        </div>
      </div>

      <Table
        fullWidth
        items={currentItems}
        schema={schema}
        density="low"
        pagination={{
          currentItemFrom: from + 1,
          currentItemTo: to,
          onNextClick: () => setCurrentPage(prev => prev + 1),
          onPrevClick: () => setCurrentPage(prev => prev - 1),
          textShowRows: intl.formatMessage({ id: 'admin/fortune-cookies.show-rows' }),
          textOf: intl.formatMessage({ id: 'admin/fortune-cookies.of' }),
          totalItems: tableLength,
        }}
        emptyStateLabel={intl.formatMessage({ id: 'admin/fortune-cookies.empty-state-label' })}
        emptyStateChildren={
          <span className="c-muted-1">
            {intl.formatMessage({ id: 'admin/fortune-cookies.empty-state-message' })}
          </span>
        }
      />
    </>
  )
}

export default CookiesPanel
