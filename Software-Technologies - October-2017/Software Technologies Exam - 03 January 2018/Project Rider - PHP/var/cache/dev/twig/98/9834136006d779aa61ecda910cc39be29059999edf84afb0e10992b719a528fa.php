<?php

/* @WebProfiler/Collector/router.html.twig */
class __TwigTemplate_09886c37796d81d574b2448cf2a22ea32da8dad546b69f22c376ce19a869ce97 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/router.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_9ef274bcf8ce2938f61306edbc244b4e7a25f2ec86187e02e97687e24254fa15 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_9ef274bcf8ce2938f61306edbc244b4e7a25f2ec86187e02e97687e24254fa15->enter($__internal_9ef274bcf8ce2938f61306edbc244b4e7a25f2ec86187e02e97687e24254fa15_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $__internal_d819964aa074c10be71202bf9aaecdcf7f84116fd5f902f7a326b3c2dd7dee4c = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_d819964aa074c10be71202bf9aaecdcf7f84116fd5f902f7a326b3c2dd7dee4c->enter($__internal_d819964aa074c10be71202bf9aaecdcf7f84116fd5f902f7a326b3c2dd7dee4c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_9ef274bcf8ce2938f61306edbc244b4e7a25f2ec86187e02e97687e24254fa15->leave($__internal_9ef274bcf8ce2938f61306edbc244b4e7a25f2ec86187e02e97687e24254fa15_prof);

        
        $__internal_d819964aa074c10be71202bf9aaecdcf7f84116fd5f902f7a326b3c2dd7dee4c->leave($__internal_d819964aa074c10be71202bf9aaecdcf7f84116fd5f902f7a326b3c2dd7dee4c_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_c078e5c1bdab2fb513aca364ac7ba5f31cb6730d60c0f43584dd4b4f9d5d06b4 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_c078e5c1bdab2fb513aca364ac7ba5f31cb6730d60c0f43584dd4b4f9d5d06b4->enter($__internal_c078e5c1bdab2fb513aca364ac7ba5f31cb6730d60c0f43584dd4b4f9d5d06b4_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        $__internal_319f6b8ec16d598eac16aa30d4458929a8d5a8d982e0042e575bc46ba35ea292 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_319f6b8ec16d598eac16aa30d4458929a8d5a8d982e0042e575bc46ba35ea292->enter($__internal_319f6b8ec16d598eac16aa30d4458929a8d5a8d982e0042e575bc46ba35ea292_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_319f6b8ec16d598eac16aa30d4458929a8d5a8d982e0042e575bc46ba35ea292->leave($__internal_319f6b8ec16d598eac16aa30d4458929a8d5a8d982e0042e575bc46ba35ea292_prof);

        
        $__internal_c078e5c1bdab2fb513aca364ac7ba5f31cb6730d60c0f43584dd4b4f9d5d06b4->leave($__internal_c078e5c1bdab2fb513aca364ac7ba5f31cb6730d60c0f43584dd4b4f9d5d06b4_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_7629a249a31989a75e7da1f177285855b8a5e584ed7f5bad11da431096ed27e6 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_7629a249a31989a75e7da1f177285855b8a5e584ed7f5bad11da431096ed27e6->enter($__internal_7629a249a31989a75e7da1f177285855b8a5e584ed7f5bad11da431096ed27e6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        $__internal_bf5319f3a79d48c4ded4cf2856ed583fe92767b2fb04e404e93877cd06a5fd4f = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_bf5319f3a79d48c4ded4cf2856ed583fe92767b2fb04e404e93877cd06a5fd4f->enter($__internal_bf5319f3a79d48c4ded4cf2856ed583fe92767b2fb04e404e93877cd06a5fd4f_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_bf5319f3a79d48c4ded4cf2856ed583fe92767b2fb04e404e93877cd06a5fd4f->leave($__internal_bf5319f3a79d48c4ded4cf2856ed583fe92767b2fb04e404e93877cd06a5fd4f_prof);

        
        $__internal_7629a249a31989a75e7da1f177285855b8a5e584ed7f5bad11da431096ed27e6->leave($__internal_7629a249a31989a75e7da1f177285855b8a5e584ed7f5bad11da431096ed27e6_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_1a93d55a7e5f5301d78a26ab4fb372f818e262878396594ed65ad557b49cff68 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_1a93d55a7e5f5301d78a26ab4fb372f818e262878396594ed65ad557b49cff68->enter($__internal_1a93d55a7e5f5301d78a26ab4fb372f818e262878396594ed65ad557b49cff68_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        $__internal_c610fb2634aa7a554dfd478a62cc22b99b1d149158da0ec4f41c9a29814ead7d = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_c610fb2634aa7a554dfd478a62cc22b99b1d149158da0ec4f41c9a29814ead7d->enter($__internal_c610fb2634aa7a554dfd478a62cc22b99b1d149158da0ec4f41c9a29814ead7d_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_router", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_c610fb2634aa7a554dfd478a62cc22b99b1d149158da0ec4f41c9a29814ead7d->leave($__internal_c610fb2634aa7a554dfd478a62cc22b99b1d149158da0ec4f41c9a29814ead7d_prof);

        
        $__internal_1a93d55a7e5f5301d78a26ab4fb372f818e262878396594ed65ad557b49cff68->leave($__internal_1a93d55a7e5f5301d78a26ab4fb372f818e262878396594ed65ad557b49cff68_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/router.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  94 => 13,  85 => 12,  71 => 7,  68 => 6,  59 => 5,  42 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends '@WebProfiler/Profiler/layout.html.twig' %}

{% block toolbar %}{% endblock %}

{% block menu %}
<span class=\"label\">
    <span class=\"icon\">{{ include('@WebProfiler/Icon/router.svg') }}</span>
    <strong>Routing</strong>
</span>
{% endblock %}

{% block panel %}
    {{ render(path('_profiler_router', { token: token })) }}
{% endblock %}
", "@WebProfiler/Collector/router.html.twig", "C:\\Users\\Lalka\\Desktop\\PHP-Skeleton\\vendor\\symfony\\symfony\\src\\Symfony\\Bundle\\WebProfilerBundle\\Resources\\views\\Collector\\router.html.twig");
    }
}
