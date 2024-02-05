import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import {Button} from "@mui/material";

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
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
