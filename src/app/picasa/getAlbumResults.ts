
export const getAlbumResults = {
	/* tslint:disable */
    'https://s3.amazonaws.com/picasa-exports/?delimiter=/': {
        status: 200,
        body:`<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><Name>picasa-exports</Name><Prefix></Prefix><Marker></Marker><MaxKeys>1000</MaxKeys><Delimiter>/</Delimiter><IsTruncated>false</IsTruncated><CommonPrefixes><Prefix>Type of Products/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/</Prefix></CommonPrefixes></ListBucketResult>`
        },
    'https://s3.amazonaws.com/picasa-exports/?delimiter=/&prefix=Type of Project/': {
        status: 200,
        body: `<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><Name>picasa-exports</Name><Prefix>Type of Project/</Prefix><Marker></Marker><MaxKeys>1000</MaxKeys><Delimiter>/</Delimiter><IsTruncated>false</IsTruncated><Contents><Key>Type of Project/index.xml</Key><LastModified>2017-01-27T19:42:53.000Z</LastModified><ETag>&quot;75584200bd19a27ec708864b2eaf83ee&quot;</ETag><Size>22031</Size><StorageClass>STANDARD</StorageClass></Contents><CommonPrefixes><Prefix>Type of Project/Archways &amp; Columns/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Exterior Stone Commercial/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Exterior Stone Residential/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Firepits/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Fireplace/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Interior Make-Over/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Landscaping/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Ledge Look/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Outdoor Kitchens/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Outdoor Living/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Patio/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Pavers/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Pools/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/Retaining Walls/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/images/</Prefix></CommonPrefixes><CommonPrefixes><Prefix>Type of Project/thumbnails/</Prefix></CommonPrefixes></ListBucketResult>`
    },
    'https://s3.amazonaws.com/picasa-exports/?delimiter=/&prefix=Type of Products/images/': {
        status: 200,
        body:`<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><Name>picasa-exports</Name><Prefix>Type of Products/images/</Prefix><Marker></Marker><MaxKeys>1000</MaxKeys><Delimiter>/</Delimiter><IsTruncated>false</IsTruncated><Contents><Key>Type of Products/images/.picasa.ini</Key><LastModified>2017-01-27T19:42:36.000Z</LastModified><ETag>&quot;a1cc27e0ec23c106a8c03cc1ec193ead&quot;</ETag><Size>82</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product1.jpg</Key><LastModified>2017-01-27T19:42:36.000Z</LastModified><ETag>&quot;67d30d4ba14b5b19a3721e3eb27723f3&quot;</ETag><Size>152971</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product10.jpg</Key><LastModified>2017-01-27T19:42:36.000Z</LastModified><ETag>&quot;36c9ae2d3ad8acc1049c33a0cb653c95&quot;</ETag><Size>252072</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product11.jpg</Key><LastModified>2017-01-27T19:42:36.000Z</LastModified><ETag>&quot;70e1fbaade7f40095fae59ef4ebdc3b0&quot;</ETag><Size>197757</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product12.jpg</Key><LastModified>2017-01-27T19:42:36.000Z</LastModified><ETag>&quot;b09eaf37a953bc35714baf5a4336e904&quot;</ETag><Size>187379</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product13.jpg</Key><LastModified>2017-01-27T19:42:36.000Z</LastModified><ETag>&quot;1af0419285cb953aae8701ef7ecdce48&quot;</ETag><Size>87315</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product14.jpg</Key><LastModified>2017-01-27T19:42:36.000Z</LastModified><ETag>&quot;6cca32555d2043b573e4092d17c4c1b8&quot;</ETag><Size>191435</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product15.jpg</Key><LastModified>2017-01-27T19:42:36.000Z</LastModified><ETag>&quot;cf457e24b4b67986c2273c7ff71c6e8a&quot;</ETag><Size>98706</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product2.jpg</Key><LastModified>2017-01-27T19:42:36.000Z</LastModified><ETag>&quot;273ea36be26980b3a0d17007d6187a61&quot;</ETag><Size>146417</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product3.jpg</Key><LastModified>2017-01-27T19:42:37.000Z</LastModified><ETag>&quot;779b4450048dea676812badd6c16bd7b&quot;</ETag><Size>92151</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product4.jpg</Key><LastModified>2017-01-27T19:42:38.000Z</LastModified><ETag>&quot;b1cea1a08c97646d6d92e10de1985b35&quot;</ETag><Size>274508</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product5.jpg</Key><LastModified>2017-01-27T19:42:38.000Z</LastModified><ETag>&quot;c2cb2ddf8e7c3e81b0fb63dd5e30ce19&quot;</ETag><Size>286876</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product6.jpg</Key><LastModified>2017-01-27T19:42:40.000Z</LastModified><ETag>&quot;934f260985d5dce9ade06469b89d965b&quot;</ETag><Size>76704</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product7.jpg</Key><LastModified>2017-01-27T19:42:40.000Z</LastModified><ETag>&quot;52c1b1e8f0847a886f094263156bf2a8&quot;</ETag><Size>118854</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product8.jpg</Key><LastModified>2017-01-27T19:42:41.000Z</LastModified><ETag>&quot;7955eeb9fa9535f42f7e283f8febcf67&quot;</ETag><Size>21912</Size><StorageClass>STANDARD</StorageClass></Contents><Contents><Key>Type of Products/images/product9.jpg</Key><LastModified>2017-01-27T19:42:41.000Z</LastModified><ETag>&quot;4cb5899b8d35a366e21ce4db4ac80b63&quot;</ETag><Size>98043</Size><StorageClass>STANDARD</StorageClass></Contents></ListBucketResult>`
    },
    'https://s3.amazonaws.com/picasa-exports/Type of Products/index.xml':{
        status: 200,
        body: `<?xml version="1.0" encoding="utf-8" ?>
<album>
<albumName>Type of Products</albumName>
<albumItemCount>15</albumItemCount>
<albumCaption>TYPES OF PRODUCTS</albumCaption>
<images>
<image>
	<isFirstImage>
		true
	</isFirstImage>
	
	
	
	<isPrevImage>
		false
	</isPrevImage>
	<prevImage />
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product1.jpg
	</itemLargeImage>	
	<nextImage>
		product2.jpg
	</nextImage>
	<nextThumbnail>
		product2.jpg
	</nextThumbnail>
	<prevImage>
		
	</prevImage>
	<prevThumbnail>
		
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		1024
	</itemWidth>

	<itemHeight>
		748
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product1.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		69
	</itemThumbnailHeight>

	<itemName>
		product1.jpg
	</itemName>

	<itemNumber>
		4447
	</itemNumber>

	<itemOriginalPath>
		
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product1.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product2.jpg
	</itemLargeImage>	
	<nextImage>
		product3.jpg
	</nextImage>
	<nextThumbnail>
		product3.jpg
	</nextThumbnail>
	<prevImage>
		product1.jpg
	</prevImage>
	<prevThumbnail>
		product1.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		1024
	</itemWidth>

	<itemHeight>
		768
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product2.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		70
	</itemThumbnailHeight>

	<itemName>
		product2.jpg
	</itemName>

	<itemNumber>
		3188
	</itemNumber>

	<itemOriginalPath>
		
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product2.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product3.jpg
	</itemLargeImage>	
	<nextImage>
		product4.jpg
	</nextImage>
	<nextThumbnail>
		product4.jpg
	</nextThumbnail>
	<prevImage>
		product2.jpg
	</prevImage>
	<prevThumbnail>
		product2.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		800
	</itemWidth>

	<itemHeight>
		533
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product3.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		64
	</itemThumbnailHeight>

	<itemName>
		product3.jpg
	</itemName>

	<itemNumber>
		4454
	</itemNumber>

	<itemOriginalPath>
		
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product3.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product4.jpg
	</itemLargeImage>	
	<nextImage>
		product5.jpg
	</nextImage>
	<nextThumbnail>
		product5.jpg
	</nextThumbnail>
	<prevImage>
		product3.jpg
	</prevImage>
	<prevThumbnail>
		product3.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		1024
	</itemWidth>

	<itemHeight>
		768
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product4.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		70
	</itemThumbnailHeight>

	<itemName>
		product4.jpg
	</itemName>

	<itemNumber>
		4455
	</itemNumber>

	<itemOriginalPath>
		
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product4.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product5.jpg
	</itemLargeImage>	
	<nextImage>
		product6.jpg
	</nextImage>
	<nextThumbnail>
		product6.jpg
	</nextThumbnail>
	<prevImage>
		product4.jpg
	</prevImage>
	<prevThumbnail>
		product4.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		1024
	</itemWidth>

	<itemHeight>
		768
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product5.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		70
	</itemThumbnailHeight>

	<itemName>
		product5.jpg
	</itemName>

	<itemNumber>
		4456
	</itemNumber>

	<itemOriginalPath>
		
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product5.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product6.jpg
	</itemLargeImage>	
	<nextImage>
		product7.jpg
	</nextImage>
	<nextThumbnail>
		product7.jpg
	</nextThumbnail>
	<prevImage>
		product5.jpg
	</prevImage>
	<prevThumbnail>
		product5.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		640
	</itemWidth>

	<itemHeight>
		480
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product6.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		70
	</itemThumbnailHeight>

	<itemName>
		product6.jpg
	</itemName>

	<itemNumber>
		4457
	</itemNumber>

	<itemOriginalPath>
		
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product6.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product7.jpg
	</itemLargeImage>	
	<nextImage>
		product8.jpg
	</nextImage>
	<nextThumbnail>
		product8.jpg
	</nextThumbnail>
	<prevImage>
		product6.jpg
	</prevImage>
	<prevThumbnail>
		product6.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		640
	</itemWidth>

	<itemHeight>
		480
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product7.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		70
	</itemThumbnailHeight>

	<itemName>
		product7.jpg
	</itemName>

	<itemNumber>
		3189
	</itemNumber>

	<itemOriginalPath>
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product7.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product8.jpg
	</itemLargeImage>	
	<nextImage>
		product9.jpg
	</nextImage>
	<nextThumbnail>
		product9.jpg
	</nextThumbnail>
	<prevImage>
		product7.jpg
	</prevImage>
	<prevThumbnail>
		product7.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		319
	</itemWidth>

	<itemHeight>
		222
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product8.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		66
	</itemThumbnailHeight>

	<itemName>
		product8.jpg
	</itemName>

	<itemNumber>
		4458
	</itemNumber>

	<itemOriginalPath>
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product8.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product9.jpg
	</itemLargeImage>	
	<nextImage>
		product10.jpg
	</nextImage>
	<nextThumbnail>
		product10.jpg
	</nextThumbnail>
	<prevImage>
		product8.jpg
	</prevImage>
	<prevThumbnail>
		product8.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		650
	</itemWidth>

	<itemHeight>
		542
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product9.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		77
	</itemThumbnailHeight>

	<itemName>
		product9.jpg
	</itemName>

	<itemNumber>
		4459
	</itemNumber>

	<itemOriginalPath>
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product9.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product10.jpg
	</itemLargeImage>	
	<nextImage>
		product11.jpg
	</nextImage>
	<nextThumbnail>
		product11.jpg
	</nextThumbnail>
	<prevImage>
		product9.jpg
	</prevImage>
	<prevThumbnail>
		product9.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		1024
	</itemWidth>

	<itemHeight>
		683
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product10.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		64
	</itemThumbnailHeight>

	<itemName>
		product10.jpg
	</itemName>

	<itemNumber>
		4448
	</itemNumber>

	<itemOriginalPath>
		
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product10.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product11.jpg
	</itemLargeImage>	
	<nextImage>
		product12.jpg
	</nextImage>
	<nextThumbnail>
		product12.jpg
	</nextThumbnail>
	<prevImage>
		product10.jpg
	</prevImage>
	<prevThumbnail>
		product10.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		1024
	</itemWidth>

	<itemHeight>
		750
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product11.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		69
	</itemThumbnailHeight>

	<itemName>
		product11.jpg
	</itemName>

	<itemNumber>
		4449
	</itemNumber>

	<itemOriginalPath>
		
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product11.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product12.jpg
	</itemLargeImage>	
	<nextImage>
		product13.jpg
	</nextImage>
	<nextThumbnail>
		product13.jpg
	</nextThumbnail>
	<prevImage>
		product11.jpg
	</prevImage>
	<prevThumbnail>
		product11.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		1024
	</itemWidth>

	<itemHeight>
		683
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product12.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		64
	</itemThumbnailHeight>

	<itemName>
		product12.jpg
	</itemName>

	<itemNumber>
		4450
	</itemNumber>

	<itemOriginalPath>
		
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product12.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product13.jpg
	</itemLargeImage>	
	<nextImage>
		product14.jpg
	</nextImage>
	<nextThumbnail>
		product14.jpg
	</nextThumbnail>
	<prevImage>
		product12.jpg
	</prevImage>
	<prevThumbnail>
		product12.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		640
	</itemWidth>

	<itemHeight>
		480
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product13.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		70
	</itemThumbnailHeight>

	<itemName>
		product13.jpg
	</itemName>

	<itemNumber>
		4452
	</itemNumber>

	<itemOriginalPath>
		
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product13.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	
	<isLastImage>
		false
	</isLastImage>
	
	<isNextImage>
		true
	</isNextImage>
	
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product14.jpg
	</itemLargeImage>	
	<nextImage>
		product15.jpg
	</nextImage>
	<nextThumbnail>
		product15.jpg
	</nextThumbnail>
	<prevImage>
		product13.jpg
	</prevImage>
	<prevThumbnail>
		product13.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		1024
	</itemWidth>

	<itemHeight>
		768
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product14.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		70
	</itemThumbnailHeight>

	<itemName>
		product14.jpg
	</itemName>

	<itemNumber>
		4453
	</itemNumber>

	<itemOriginalPath>
		
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product14.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
<image>
	
	<isFirstImage>
		false
	</isFirstImage>
	
	<isPrevImage>
		true
	</isPrevImage>
	
	
	<isLastImage>
		true
	</isLastImage>
	
	
	
	<isNextImage>
		false
	</isNextImage>
	


	<firstImage>
		images/product1.jpg
	</firstImage>
	<itemLargeImage>
		images/product15.jpg
	</itemLargeImage>	
	<nextImage>
		
	</nextImage>
	<nextThumbnail>
		
	</nextThumbnail>
	<prevImage>
		product14.jpg
	</prevImage>
	<prevThumbnail>
		product14.jpg
	</prevThumbnail>
	<lastImage>
		images/product15.jpg
	</lastImage>
	<lastThumbnail>
		thumbnails/product15.jpg
	</lastThumbnail>

	<itemWidth>
		640
	</itemWidth>

	<itemHeight>
		480
	</itemHeight>

	<itemThumbnailImage>
		thumbnails/product15.jpg
	</itemThumbnailImage>

	<itemThumbnailWidth>
		90
	</itemThumbnailWidth>

	<itemThumbnailHeight>
		70
	</itemThumbnailHeight>

	<itemName>
		product15.jpg
	</itemName>

	<itemNumber>
		3187
	</itemNumber>

	<itemOriginalPath>
		
	</itemOriginalPath>


	<itemNameOnly>
		itemNameOnly UNDEFINED (9)
	</itemNameOnly>
	
	<itemCaption>
		product15.jpg
	</itemCaption>

	<itemSize>
		itemSize UNDEFINED (9)
	</itemSize>
</image>
</images>
</album>`
    }
};

