import { DetailsDivProps } from '@/types';
import styles from './TemplateName.module.scss';
import cn from 'classnames'

interface TemplateNameProps extends DetailsDivProps { }

export const TemplateName = ({ className, ...props }: TemplateNameProps) => {

  return (
    <div className={cn(styles.templateName, className)} {...props}>

    </div>
  )
};
