import React from 'react';
import AlbumList from './compenent/AlbumList';

AlbumFeatures.propTypes = {
    
};

function AlbumFeatures(props) {
    const albumList = [
        {
            id: 1,
            name : 'Drill ',
            thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/avatars/5/6/d/0/56d0c59f4dc2973de1e2cf1adff8307c.jpg',
        },
        {
            id: 2,
            name : 'Trap',
            thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/0/8/a/808ad7f3fb53c013953b8e4ae8ebf48e.jpg',
        },
        {
            id: 3,
            name : 'Bolero',
            thumbnailUrl : 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/9/0/4/990414fa748e24d078c6b2ade4b8af40.jpg',
        },
    ]
    return (
        <div>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeatures;