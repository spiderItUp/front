import React from 'react'
import { useSelector } from 'react-redux'

import { getUiLoaderSelector } from 'redux/selectors/ui.selector'

import BasicSpinner from 'components/loaders/spinner/basicSpinner.component'

const _Loader = props => {
  const loading = useSelector(getUiLoaderSelector)
  return (
    <>
      {loading && <BasicSpinner></BasicSpinner>}
    </>
  )
}

export default _Loader
