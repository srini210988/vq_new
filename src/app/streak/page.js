import { Button } from "@/components/ui/button"
import Layout from '../components/layout';
import { Loader2, RefreshCw, Circle, Spinner } from 'lucide-react'
export default function Page() {
    return (<Layout> 
        <div className="flex justify-center items-center"> 
            <div> 
                <Button className="bg-pink-600">This is Streak container</Button>
            </div>
        </div>
    </Layout>);
}