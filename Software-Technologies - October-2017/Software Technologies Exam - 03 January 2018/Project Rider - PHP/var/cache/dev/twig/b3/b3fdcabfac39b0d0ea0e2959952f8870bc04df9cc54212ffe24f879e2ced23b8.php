<?php

/* @Twig/layout.html.twig */
class __TwigTemplate_0ef46ff3e00be850b375145c4de69a72941605b1b30816a42d1a36aa92bc080f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'head' => array($this, 'block_head'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_26e6a3d4ea5885e6985152468e23496a11ee42483ea4613e6f3f7837053afeea = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_26e6a3d4ea5885e6985152468e23496a11ee42483ea4613e6f3f7837053afeea->enter($__internal_26e6a3d4ea5885e6985152468e23496a11ee42483ea4613e6f3f7837053afeea_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/layout.html.twig"));

        $__internal_071728e4032fd4942bafe90af5fe2d205a838df6fba4be9cb06f727014996786 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_071728e4032fd4942bafe90af5fe2d205a838df6fba4be9cb06f727014996786->enter($__internal_071728e4032fd4942bafe90af5fe2d205a838df6fba4be9cb06f727014996786_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/layout.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"";
        // line 4
        echo twig_escape_filter($this->env, $this->env->getCharset(), "html", null, true);
        echo "\" />
        <meta name=\"robots\" content=\"noindex,nofollow\" />
        <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />
        <title>";
        // line 7
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        <link rel=\"icon\" type=\"image/png\" href=\"";
        // line 8
        echo twig_include($this->env, $context, "@Twig/images/favicon.png.base64");
        echo "\">
        <style>";
        // line 9
        echo twig_include($this->env, $context, "@Twig/exception.css.twig");
        echo "</style>
        ";
        // line 10
        $this->displayBlock('head', $context, $blocks);
        // line 11
        echo "    </head>
    <body>
        <header>
            <div class=\"container\">
                <h1 class=\"logo\">";
        // line 15
        echo twig_include($this->env, $context, "@Twig/images/symfony-logo.svg");
        echo " Symfony Exception</h1>

                <div class=\"help-link\">
                    <a href=\"https://symfony.com/doc\">
                        <span class=\"icon\">";
        // line 19
        echo twig_include($this->env, $context, "@Twig/images/icon-book.svg");
        echo "</span>
                        <span class=\"hidden-xs-down\">Symfony</span> Docs
                    </a>
                </div>

                <div class=\"help-link\">
                    <a href=\"https://symfony.com/support\">
                        <span class=\"icon\">";
        // line 26
        echo twig_include($this->env, $context, "@Twig/images/icon-support.svg");
        echo "</span>
                        <span class=\"hidden-xs-down\">Symfony</span> Support
                    </a>
                </div>
            </div>
        </header>

        ";
        // line 33
        $this->displayBlock('body', $context, $blocks);
        // line 34
        echo "        ";
        echo twig_include($this->env, $context, "@Twig/base_js.html.twig");
        echo "
    </body>
</html>
";
        
        $__internal_26e6a3d4ea5885e6985152468e23496a11ee42483ea4613e6f3f7837053afeea->leave($__internal_26e6a3d4ea5885e6985152468e23496a11ee42483ea4613e6f3f7837053afeea_prof);

        
        $__internal_071728e4032fd4942bafe90af5fe2d205a838df6fba4be9cb06f727014996786->leave($__internal_071728e4032fd4942bafe90af5fe2d205a838df6fba4be9cb06f727014996786_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_43ddff1cbf1cbac5e541c55181e15bba997e85d6ba06df900d0f348b50b077c7 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_43ddff1cbf1cbac5e541c55181e15bba997e85d6ba06df900d0f348b50b077c7->enter($__internal_43ddff1cbf1cbac5e541c55181e15bba997e85d6ba06df900d0f348b50b077c7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        $__internal_700a1a57b29068fc039ce34254c09dc5384ebcb3923be2a6cabd94067f6bd67d = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_700a1a57b29068fc039ce34254c09dc5384ebcb3923be2a6cabd94067f6bd67d->enter($__internal_700a1a57b29068fc039ce34254c09dc5384ebcb3923be2a6cabd94067f6bd67d_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        
        $__internal_700a1a57b29068fc039ce34254c09dc5384ebcb3923be2a6cabd94067f6bd67d->leave($__internal_700a1a57b29068fc039ce34254c09dc5384ebcb3923be2a6cabd94067f6bd67d_prof);

        
        $__internal_43ddff1cbf1cbac5e541c55181e15bba997e85d6ba06df900d0f348b50b077c7->leave($__internal_43ddff1cbf1cbac5e541c55181e15bba997e85d6ba06df900d0f348b50b077c7_prof);

    }

    // line 10
    public function block_head($context, array $blocks = array())
    {
        $__internal_cc28d3c2f196ad3f503c733b9bf87354e39fa4d6e6c677ac1e8b9e90cd9df141 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_cc28d3c2f196ad3f503c733b9bf87354e39fa4d6e6c677ac1e8b9e90cd9df141->enter($__internal_cc28d3c2f196ad3f503c733b9bf87354e39fa4d6e6c677ac1e8b9e90cd9df141_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        $__internal_9cb5b31c8cffc2673e59ef77a7cb6edb66c6192ba485e7321fcc7c6ca8a1b0a5 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_9cb5b31c8cffc2673e59ef77a7cb6edb66c6192ba485e7321fcc7c6ca8a1b0a5->enter($__internal_9cb5b31c8cffc2673e59ef77a7cb6edb66c6192ba485e7321fcc7c6ca8a1b0a5_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        
        $__internal_9cb5b31c8cffc2673e59ef77a7cb6edb66c6192ba485e7321fcc7c6ca8a1b0a5->leave($__internal_9cb5b31c8cffc2673e59ef77a7cb6edb66c6192ba485e7321fcc7c6ca8a1b0a5_prof);

        
        $__internal_cc28d3c2f196ad3f503c733b9bf87354e39fa4d6e6c677ac1e8b9e90cd9df141->leave($__internal_cc28d3c2f196ad3f503c733b9bf87354e39fa4d6e6c677ac1e8b9e90cd9df141_prof);

    }

    // line 33
    public function block_body($context, array $blocks = array())
    {
        $__internal_26cf585a5ba30d25a96abe9fb4114e10a240b8b2fb4a2a75a865b12258e19183 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_26cf585a5ba30d25a96abe9fb4114e10a240b8b2fb4a2a75a865b12258e19183->enter($__internal_26cf585a5ba30d25a96abe9fb4114e10a240b8b2fb4a2a75a865b12258e19183_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        $__internal_62e08cc911e24c25479e99e91bf46b2cd48e9e6e60ea36a70514e76086d169b4 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_62e08cc911e24c25479e99e91bf46b2cd48e9e6e60ea36a70514e76086d169b4->enter($__internal_62e08cc911e24c25479e99e91bf46b2cd48e9e6e60ea36a70514e76086d169b4_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_62e08cc911e24c25479e99e91bf46b2cd48e9e6e60ea36a70514e76086d169b4->leave($__internal_62e08cc911e24c25479e99e91bf46b2cd48e9e6e60ea36a70514e76086d169b4_prof);

        
        $__internal_26cf585a5ba30d25a96abe9fb4114e10a240b8b2fb4a2a75a865b12258e19183->leave($__internal_26cf585a5ba30d25a96abe9fb4114e10a240b8b2fb4a2a75a865b12258e19183_prof);

    }

    public function getTemplateName()
    {
        return "@Twig/layout.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  137 => 33,  120 => 10,  103 => 7,  88 => 34,  86 => 33,  76 => 26,  66 => 19,  59 => 15,  53 => 11,  51 => 10,  47 => 9,  43 => 8,  39 => 7,  33 => 4,  28 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"{{ _charset }}\" />
        <meta name=\"robots\" content=\"noindex,nofollow\" />
        <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />
        <title>{% block title %}{% endblock %}</title>
        <link rel=\"icon\" type=\"image/png\" href=\"{{ include('@Twig/images/favicon.png.base64') }}\">
        <style>{{ include('@Twig/exception.css.twig') }}</style>
        {% block head %}{% endblock %}
    </head>
    <body>
        <header>
            <div class=\"container\">
                <h1 class=\"logo\">{{ include('@Twig/images/symfony-logo.svg') }} Symfony Exception</h1>

                <div class=\"help-link\">
                    <a href=\"https://symfony.com/doc\">
                        <span class=\"icon\">{{ include('@Twig/images/icon-book.svg') }}</span>
                        <span class=\"hidden-xs-down\">Symfony</span> Docs
                    </a>
                </div>

                <div class=\"help-link\">
                    <a href=\"https://symfony.com/support\">
                        <span class=\"icon\">{{ include('@Twig/images/icon-support.svg') }}</span>
                        <span class=\"hidden-xs-down\">Symfony</span> Support
                    </a>
                </div>
            </div>
        </header>

        {% block body %}{% endblock %}
        {{ include('@Twig/base_js.html.twig') }}
    </body>
</html>
", "@Twig/layout.html.twig", "C:\\Users\\Lalka\\Desktop\\PHP-Skeleton\\vendor\\symfony\\symfony\\src\\Symfony\\Bundle\\TwigBundle\\Resources\\views\\layout.html.twig");
    }
}
