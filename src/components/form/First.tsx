import React from 'react'
import Card from "@/components/Card"

export default function First() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                <Card image="wall.webp" name="Wall" />
                <Card image="ceiling.webp" name="Ceiling" />
                <Card image="door.webp" name="Door" />
                <Card image="floor.webp" name="Floor" />
            </div>
        </div>
    )
}
