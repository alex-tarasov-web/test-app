import { useTranslation } from 'react-i18next'
import {Button} from "@mui/material";


export const PageError = () => {
  const { t } = useTranslation()

  const onReloadPage = (): void => {
  }

  return (
    <div>
      <p>{t('An unexpected error has occurred')}</p>

      <Button onClick={onReloadPage}>{t('Reaload the page')}</Button>
    </div>
  )
}
