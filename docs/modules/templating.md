---
title: Templating
---

## Render your templates

In your controller, you can use the templating engine to generate the content of your response, basicaly HTML content. 

2 helper functions are present to do this job : `render` and `renderRaw`

The main difference is that `renderRaw` returns the rendered code (`string`) whereas `render` returns a response (`\Thelia\Core\HttpFoundation\Response`).


```php
namespace MyModule\Controller;

use Thelia\Controller\Front\BaseFrontController;

class Something extends BaseFrontController
{
    public function viewAction($productId)
    {
        // ...
        
        return $this->render('mytemplate', ['product_id' => $productId]);
    }
}
```

By default, the template file to render is located inside your module in the `templates` directory. Then, in one of the following directories depending of the context of the request : frontOffice, backOffice, pdf, email. And finally in the directory with the same name of you current template (in the current context)

`mytemplate.html` : 

```smarty
{loop type="product" name="mymodule.product" id="{$product_id}"}
    {* Do something with product *}
{/loop}
```

## Overrides and fallbacks

When you call the `render` function inside your module, Thelia will apply the following set of rules to find the file that will be rendered. 

Example : if we use the frontOffice template `mytemplate`, and render `myrender` file inside `mymodule` module :

1. Thelia will first test if file `templates/frontOffice/mytemplate/myrender.html` exists and will use it.
2. Then it will search for `templates/frontOffice/mytemplate/modules/mymodule/myrender.html`.
3. Then it will try `/local/modules/mymodule/templates/frontOffice/mytemplate/myrender.html`.
4. By default, Thelia will stop here and generate an error if the file was not found. However, if you've set the `$useFallbackTemplate`variable to `true` in your controller (this is the default), Thelia will enventually use `/local/modules/mymodule/templates/frontOffice/*default*/myrender.html`.

This way, you can override a module's template file either in the front office template (rule 2), or in the in the module's template directory (rule 3)

```php
<?php
namespace MyModule\Controller;

use Thelia\Controller\Front\BaseFrontController;

class MyController extends BaseFrontController
{
    
    protected $useFallbackTemplate = true;
    
    public function viewAction($productId)
    {
        // ...
        return $this->render('mytemplate', ['product_id' => $productId]);
    }
}
```
