<?php

/* base.html.twig */
class __TwigTemplate_93e2499d03c6402ea1e3906495568257ed0120721f7f5badb0e11600e82927c5 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'body_id' => array($this, 'block_body_id'),
            'body' => array($this, 'block_body'),
            'main' => array($this, 'block_main'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_bdcc091318c3204cb8c7d1ac8599cc8eb8a25940858b280ac02d752eb9cc1e13 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_bdcc091318c3204cb8c7d1ac8599cc8eb8a25940858b280ac02d752eb9cc1e13->enter($__internal_bdcc091318c3204cb8c7d1ac8599cc8eb8a25940858b280ac02d752eb9cc1e13_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        $__internal_76cbd1df8ae13d210bfd5545127a82059bf5e49d246a8fbc54ea30f9cf378e17 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_76cbd1df8ae13d210bfd5545127a82059bf5e49d246a8fbc54ea30f9cf378e17->enter($__internal_76cbd1df8ae13d210bfd5545127a82059bf5e49d246a8fbc54ea30f9cf378e17_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 6
        echo "<!DOCTYPE html>
<html lang=\"en-US\">
<head>
    <meta charset=\"UTF-8\"/>
    <title>";
        // line 10
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
    ";
        // line 11
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 16
        echo "    <link rel=\"icon\" type=\"image/x-icon\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\"/>
</head>

<body id=\"";
        // line 19
        $this->displayBlock('body_id', $context, $blocks);
        echo "\">
";
        // line 20
        $this->displayBlock('body', $context, $blocks);
        // line 23
        echo "</body>
</html>
";
        
        $__internal_bdcc091318c3204cb8c7d1ac8599cc8eb8a25940858b280ac02d752eb9cc1e13->leave($__internal_bdcc091318c3204cb8c7d1ac8599cc8eb8a25940858b280ac02d752eb9cc1e13_prof);

        
        $__internal_76cbd1df8ae13d210bfd5545127a82059bf5e49d246a8fbc54ea30f9cf378e17->leave($__internal_76cbd1df8ae13d210bfd5545127a82059bf5e49d246a8fbc54ea30f9cf378e17_prof);

    }

    // line 10
    public function block_title($context, array $blocks = array())
    {
        $__internal_1127ca6f8a751a3345104b20d4ff5faafba0fda49e522765bc387f64ff167335 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_1127ca6f8a751a3345104b20d4ff5faafba0fda49e522765bc387f64ff167335->enter($__internal_1127ca6f8a751a3345104b20d4ff5faafba0fda49e522765bc387f64ff167335_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        $__internal_f05363d07ba15c34cf26c00215dc61afcd29c8d024618bc8fd424aff5a329f63 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_f05363d07ba15c34cf26c00215dc61afcd29c8d024618bc8fd424aff5a329f63->enter($__internal_f05363d07ba15c34cf26c00215dc61afcd29c8d024618bc8fd424aff5a329f63_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Project Rider";
        
        $__internal_f05363d07ba15c34cf26c00215dc61afcd29c8d024618bc8fd424aff5a329f63->leave($__internal_f05363d07ba15c34cf26c00215dc61afcd29c8d024618bc8fd424aff5a329f63_prof);

        
        $__internal_1127ca6f8a751a3345104b20d4ff5faafba0fda49e522765bc387f64ff167335->leave($__internal_1127ca6f8a751a3345104b20d4ff5faafba0fda49e522765bc387f64ff167335_prof);

    }

    // line 11
    public function block_stylesheets($context, array $blocks = array())
    {
        $__internal_c7cfc2d7533a1bab1304d4a8e5951600d8982b0d3a0bafe50a67cf7384073ff9 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_c7cfc2d7533a1bab1304d4a8e5951600d8982b0d3a0bafe50a67cf7384073ff9->enter($__internal_c7cfc2d7533a1bab1304d4a8e5951600d8982b0d3a0bafe50a67cf7384073ff9_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_7515539e1fccd24d77aa9e961302b1a7019ac6ca2d47662a90b452266fce00f3 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_7515539e1fccd24d77aa9e961302b1a7019ac6ca2d47662a90b452266fce00f3->enter($__internal_7515539e1fccd24d77aa9e961302b1a7019ac6ca2d47662a90b452266fce00f3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 12
        echo "        <link rel=\"stylesheet\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("css/reset.css"), "html", null, true);
        echo "\">
        <link rel=\"stylesheet\" href=\"";
        // line 13
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("css/style.css"), "html", null, true);
        echo "\">
        <link rel=\"stylesheet\" href=\"";
        // line 14
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("css/create-style.css"), "html", null, true);
        echo "\">
    ";
        
        $__internal_7515539e1fccd24d77aa9e961302b1a7019ac6ca2d47662a90b452266fce00f3->leave($__internal_7515539e1fccd24d77aa9e961302b1a7019ac6ca2d47662a90b452266fce00f3_prof);

        
        $__internal_c7cfc2d7533a1bab1304d4a8e5951600d8982b0d3a0bafe50a67cf7384073ff9->leave($__internal_c7cfc2d7533a1bab1304d4a8e5951600d8982b0d3a0bafe50a67cf7384073ff9_prof);

    }

    // line 19
    public function block_body_id($context, array $blocks = array())
    {
        $__internal_341007997b2313c19e6de3173f5394cba74345cbb941c07f4113dc6a67e99383 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_341007997b2313c19e6de3173f5394cba74345cbb941c07f4113dc6a67e99383->enter($__internal_341007997b2313c19e6de3173f5394cba74345cbb941c07f4113dc6a67e99383_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body_id"));

        $__internal_e291e4e2f372f2bdd455bf6113ac57feadcd355e5747c49f864f925ad1c10c58 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_e291e4e2f372f2bdd455bf6113ac57feadcd355e5747c49f864f925ad1c10c58->enter($__internal_e291e4e2f372f2bdd455bf6113ac57feadcd355e5747c49f864f925ad1c10c58_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body_id"));

        
        $__internal_e291e4e2f372f2bdd455bf6113ac57feadcd355e5747c49f864f925ad1c10c58->leave($__internal_e291e4e2f372f2bdd455bf6113ac57feadcd355e5747c49f864f925ad1c10c58_prof);

        
        $__internal_341007997b2313c19e6de3173f5394cba74345cbb941c07f4113dc6a67e99383->leave($__internal_341007997b2313c19e6de3173f5394cba74345cbb941c07f4113dc6a67e99383_prof);

    }

    // line 20
    public function block_body($context, array $blocks = array())
    {
        $__internal_beaa2d51a0f82d2ffe57fe54a393d083c7d316ab8a5154c8aa74cdcf5b52b778 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_beaa2d51a0f82d2ffe57fe54a393d083c7d316ab8a5154c8aa74cdcf5b52b778->enter($__internal_beaa2d51a0f82d2ffe57fe54a393d083c7d316ab8a5154c8aa74cdcf5b52b778_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        $__internal_6b38f8dbe4a3d491127b0cf5facab33a61d01a1f72e4af0596762b54b526ca71 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_6b38f8dbe4a3d491127b0cf5facab33a61d01a1f72e4af0596762b54b526ca71->enter($__internal_6b38f8dbe4a3d491127b0cf5facab33a61d01a1f72e4af0596762b54b526ca71_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 21
        echo "    ";
        $this->displayBlock('main', $context, $blocks);
        
        $__internal_6b38f8dbe4a3d491127b0cf5facab33a61d01a1f72e4af0596762b54b526ca71->leave($__internal_6b38f8dbe4a3d491127b0cf5facab33a61d01a1f72e4af0596762b54b526ca71_prof);

        
        $__internal_beaa2d51a0f82d2ffe57fe54a393d083c7d316ab8a5154c8aa74cdcf5b52b778->leave($__internal_beaa2d51a0f82d2ffe57fe54a393d083c7d316ab8a5154c8aa74cdcf5b52b778_prof);

    }

    public function block_main($context, array $blocks = array())
    {
        $__internal_f11b49f09ccaab7192f67ecec7d169e38d99ec71c7e419fc720231eaa2195ddf = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_f11b49f09ccaab7192f67ecec7d169e38d99ec71c7e419fc720231eaa2195ddf->enter($__internal_f11b49f09ccaab7192f67ecec7d169e38d99ec71c7e419fc720231eaa2195ddf_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "main"));

        $__internal_44dc84db36a07f1aa422f2a30d81258c454c0a186272705d6fae7d7b0289e792 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_44dc84db36a07f1aa422f2a30d81258c454c0a186272705d6fae7d7b0289e792->enter($__internal_44dc84db36a07f1aa422f2a30d81258c454c0a186272705d6fae7d7b0289e792_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "main"));

        
        $__internal_44dc84db36a07f1aa422f2a30d81258c454c0a186272705d6fae7d7b0289e792->leave($__internal_44dc84db36a07f1aa422f2a30d81258c454c0a186272705d6fae7d7b0289e792_prof);

        
        $__internal_f11b49f09ccaab7192f67ecec7d169e38d99ec71c7e419fc720231eaa2195ddf->leave($__internal_f11b49f09ccaab7192f67ecec7d169e38d99ec71c7e419fc720231eaa2195ddf_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  141 => 21,  132 => 20,  115 => 19,  103 => 14,  99 => 13,  94 => 12,  85 => 11,  67 => 10,  55 => 23,  53 => 20,  49 => 19,  42 => 16,  40 => 11,  36 => 10,  30 => 6,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{#
   This is the base template used as the application layout which contains the
   common elements and decorates all the other templates.
   See http://symfony.com/doc/current/book/templating.html#template-inheritance-and-layouts
#}
<!DOCTYPE html>
<html lang=\"en-US\">
<head>
    <meta charset=\"UTF-8\"/>
    <title>{% block title %}Project Rider{% endblock %}</title>
    {% block stylesheets %}
        <link rel=\"stylesheet\" href=\"{{ asset('css/reset.css') }}\">
        <link rel=\"stylesheet\" href=\"{{ asset('css/style.css') }}\">
        <link rel=\"stylesheet\" href=\"{{ asset('css/create-style.css') }}\">
    {% endblock %}
    <link rel=\"icon\" type=\"image/x-icon\" href=\"{{ asset('favicon.ico') }}\"/>
</head>

<body id=\"{% block body_id %}{% endblock %}\">
{% block body %}
    {% block main %}{% endblock %}
{% endblock %}
</body>
</html>
", "base.html.twig", "C:\\Users\\Lalka\\Desktop\\PHP-Skeleton\\app\\Resources\\views\\base.html.twig");
    }
}
