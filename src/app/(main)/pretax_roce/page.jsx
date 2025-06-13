import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

import PretaxRoceContainer from './container'

export default async function Page() {
  // const supabase = await createClient()

  // const { data, error } = await supabase.auth.getUser()

  // if (error || !data?.user) {
  //   redirect('/auth/login')
  // }

  return (
    <div className='w-full h-full'>
      <PretaxRoceContainer />
    </div>
  );
}