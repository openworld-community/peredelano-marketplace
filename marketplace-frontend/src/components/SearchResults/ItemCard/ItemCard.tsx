import React from 'react';
import styles from './styles.module.css';
import {ListingItem} from "@/components/SearchResults/ItemCard/types";

interface ItemCardProps {
    item: ListingItem; // todo: fix any
}

const ItemCard: React.FC<ItemCardProps> = ({item}) => {
    return (
        <div className={styles.ItemCard}>
            <div>{item.title}</div>
            <div>
                <span>{item.price}</span>
                <span>{item.currency}</span>
            </div>
        </div>
    );
}

export default ItemCard;