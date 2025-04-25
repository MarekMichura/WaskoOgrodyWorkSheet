import dynamic from 'next/dynamic'
import {useCallback, useMemo} from 'react'
import {toast, type ToastOptions} from 'react-hot-toast/headless'

import CloseIcon from '@/components/image/svg/close'
import ErrorIcon from '@/components/image/svg/error'
import InfoIcon from '@/components/image/svg/info'
import LoadingIcon from '@/components/image/svg/loading'
import SuccessIcon from '@/components/image/svg/success'
import WarnIcon from '@/components/image/svg/warn'
import {useTranslations} from '@/utils/locale/_help/useTranslations'

import s from './css.module.scss'
import {EToast} from './type/EToast'
import {type IToastProps} from './type/IToastProps'

const WarnLottie = dynamic(() => import('@/components/image/lottie/warn'), {ssr: false, loading: () => <WarnIcon className={s.svg} />})
const ErrorLottie = dynamic(() => import('@/components/image/lottie/error'), {ssr: false, loading: () => <ErrorIcon className={s.svg} />})
const SuccessLottie = dynamic(() => import('@/components/image/lottie/success'), {ssr: false, loading: () => <SuccessIcon className={s.svg} />})
const InfoLottie = dynamic(() => import('@/components/image/lottie/info'), {ssr: false, loading: () => <InfoIcon className={s.svg} />})
const LoadingLottie = dynamic(() => import('@/components/image/lottie/loading'), {ssr: false, loading: () => <LoadingIcon className={s.svg} />})

export default function Toast({id, type, message}: IToastProps) {
  const t = useTranslations('toast')

  const {className, Icon, text} = useMemo(() => {
    switch (type) {
      default:
      case EToast.error:
        return {Icon: ErrorLottie, className: s.error, text: t('error')}
      case EToast.success:
        return {Icon: SuccessLottie, className: s.success, text: t('success')}
      case EToast.warning:
        return {Icon: WarnLottie, className: s.warn, text: t('warning')}
      case EToast.info:
        return {Icon: InfoLottie, className: s.info, text: t('information')}
      case EToast.loading:
        return {Icon: LoadingLottie, className: s.loading, text: t('loading')}
    }
  }, [t, type])

  const close = useCallback(() => {
    toast.dismiss(id)
  }, [id])

  return (
    <div className={className}>
      <div className={s.svgCon}>
        <Icon />
      </div>
      <div className={s.content}>
        <h2 className={s.title}>{text}</h2>
        <span className={s.text}>{message}</span>
      </div>
      <CloseIcon className={s.close} onClick={close} />
    </div>
  )
}

export function customToast(message: string, type?: EToast, opts?: ToastOptions) {
  return toast.custom((t) => <Toast id={t.id} type={type} message={message} />, opts)
}
