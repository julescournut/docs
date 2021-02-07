---
title: Caching
---

Thelia uses the Symfony cache component.

This component provides a strict [`PSR-6`](http://www.php-fig.org/psr/psr-6/) implementation for adding cache to your applications. It is designed to have a low overhead so that caching is fastest. It ships with a few caching adapters for the most widespread and suited to caching backends. It also provides a doctrine/cache proxy adapter to cover more advanced caching needs and a proxy adapter for greater interoperability between PSR-6 implementations.

The service "thelia.cache" is available in Thelia. This service is a simple implementation of `FilesystemAdapter`.

```php
class MyController extends BaseFrontController
{
    public function myMethod()
    {
        $myItemKey = 'my_cache_key';

        /** @var \Symfony\Component\Cache\Adapter\AdapterInterface $cacheAdapter */
        $cacheAdapter = $this->container->get('thelia.cache');

        /** @var \Symfony\Component\Cache\Adapter\AdapterInterface $cacheItem */
        $cacheItem = $cacheAdapter->getItem($myItemKey);

        if (!$cacheItem->isHit()) {
            $cacheItem
                ->set('My big value')
                ->expiresAfter(6000)
                ->save();
        }

        $myValue = $cacheItem->get();
    }
}
```