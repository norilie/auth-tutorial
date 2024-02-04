// import { Header } from '@/components/auth/header'
// import { Card, CardFooter, CardHeader } from '@/components/ui/card'
// import { BackButton } from '@/components/auth/back-button'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export const ErrorCard = () => {
  return (
    // <Card className='w-[400px] shadow-md'>
    //   <CardHeader>
    //     <Header label='Oops! Something went wrong!' />
    //     <CardFooter>
    //       <BackButton label='Back to login' href='/auth/login' />
    //     </CardFooter>
    //   </CardHeader>
    // </Card>
    <CardWrapper
      headerLabel='Oops! Something went wrong!'
      backButtonHref='/auth/login'
      backButtonLabel='Back to login'
    >
      <div className='w-full flex justify-center items-center'>
        <ExclamationTriangleIcon className='text-destructive' />
      </div>
    </CardWrapper>
  )
}
