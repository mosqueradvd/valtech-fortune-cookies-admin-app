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

const CookiesPanel: React.FC = () => {
  const { data, loading, error, add, del } = useFortuneCookies()
  const [text, setText] = useState('')
  const intl = useIntl()

  /* ----- table columns ----- */
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

  if (loading) return <Spinner />

  return (
    <>
      {error && <div className="c-danger mb4">{error}</div>}

      {/* ----- new cookies creation form ----- */}
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

      {/* ----- VTEX Style Guide Table ----- */}
      <Table
        fullWidth
        items={data}
        schema={schema}
        density="low"
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
