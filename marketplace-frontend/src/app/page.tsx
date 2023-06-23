import Image from 'next/image'
import styles from './page.module.css'
import {ListingItem} from "@/components/SearchResults/ItemCard/types";
import ItemCard from "@/components/SearchResults/ItemCard/ItemCard";

const getData = async (): Promise<ListingItem[]> => {
    const stubItems = generateStubItems(20);

    return new Promise(res => {
        setTimeout(() => {
            res(stubItems);
        }, 3000)
    })

    function generateStubItems(count: number): ListingItem[] {
        const result = [];
        for(let i=0; i<count; i++) {
            const item: ListingItem = {
                id: `ItmID${i}`,
                title: `Item very good ${i}`,
                price: i % 10 * 1000,
                currency: 'AMD',
            }
            result.push(item)
        }
        return result;
    }
}

export default async function Home() {
    const items: ListingItem[] = await getData();
    return (
        <main className={styles.main}>
            <div className={styles.StubViewport}>
                <div className={styles.mainSearchResultsList}>
                    {items.map(item => (
                        <ItemCard item={item} key={item.id}/>
                    ))}
                </div>
            </div>
        </main>
    )
}
