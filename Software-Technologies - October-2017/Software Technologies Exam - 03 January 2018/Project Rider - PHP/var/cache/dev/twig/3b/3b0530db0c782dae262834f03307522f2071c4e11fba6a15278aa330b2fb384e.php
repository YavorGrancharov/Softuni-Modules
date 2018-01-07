<?php

/* @WebProfiler/Collector/exception.html.twig */
class __TwigTemplate_f32ad73c9bc804e7d7685ce925e27ce9c7daa98efc0b9a8c89227d7076a75563 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/exception.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
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
        $__internal_2720df14f80ec5bf15c3b714dbd3fa873aa3e7a506da2693ee0684ee463b5cac = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_2720df14f80ec5bf15c3b714dbd3fa873aa3e7a506da2693ee0684ee463b5cac->enter($__internal_2720df14f80ec5bf15c3b714dbd3fa873aa3e7a506da2693ee0684ee463b5cac_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/exception.html.twig"));

        $__internal_49f3e764517f372e50627c1a4802bac994d2922cd4bc1f62162f6120e11bfc1d = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_49f3e764517f372e50627c1a4802bac994d2922cd4bc1f62162f6120e11bfc1d->enter($__internal_49f3e764517f372e50627c1a4802bac994d2922cd4bc1f62162f6120e11bfc1d_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/exception.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_2720df14f80ec5bf15c3b714dbd3fa873aa3e7a506da2693ee0684ee463b5cac->leave($__internal_2720df14f80ec5bf15c3b714dbd3fa873aa3e7a506da2693ee0684ee463b5cac_prof);

        
        $__internal_49f3e764517f372e50627c1a4802bac994d2922cd4bc1f62162f6120e11bfc1d->leave($__internal_49f3e764517f372e50627c1a4802bac994d2922cd4bc1f62162f6120e11bfc1d_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_6b6a6ab3d24208e91f8cf19585207414b7a6f6d0f25bf04ec783c091fa13866f = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_6b6a6ab3d24208e91f8cf19585207414b7a6f6d0f25bf04ec783c091fa13866f->enter($__internal_6b6a6ab3d24208e91f8cf19585207414b7a6f6d0f25bf04ec783c091fa13866f_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        $__internal_dc3287532135b938698d9d68a90694886c5d152a7ebad3b85fee3c2343368fe6 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_dc3287532135b938698d9d68a90694886c5d152a7ebad3b85fee3c2343368fe6->enter($__internal_dc3287532135b938698d9d68a90694886c5d152a7ebad3b85fee3c2343368fe6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    ";
        if ($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) {
            // line 5
            echo "        <style>
            ";
            // line 6
            echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_exception_css", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
            echo "
        </style>
    ";
        }
        // line 9
        echo "    ";
        $this->displayParentBlock("head", $context, $blocks);
        echo "
";
        
        $__internal_dc3287532135b938698d9d68a90694886c5d152a7ebad3b85fee3c2343368fe6->leave($__internal_dc3287532135b938698d9d68a90694886c5d152a7ebad3b85fee3c2343368fe6_prof);

        
        $__internal_6b6a6ab3d24208e91f8cf19585207414b7a6f6d0f25bf04ec783c091fa13866f->leave($__internal_6b6a6ab3d24208e91f8cf19585207414b7a6f6d0f25bf04ec783c091fa13866f_prof);

    }

    // line 12
    public function block_menu($context, array $blocks = array())
    {
        $__internal_35d8e75e67bcb8391b85d33a4910defb378a6381dabf9fc79d025a21d54fbb2b = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_35d8e75e67bcb8391b85d33a4910defb378a6381dabf9fc79d025a21d54fbb2b->enter($__internal_35d8e75e67bcb8391b85d33a4910defb378a6381dabf9fc79d025a21d54fbb2b_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        $__internal_081730706b8c3f1f3d07627b3d065a1bb7efc23ae228c959ac0a7b3c98775627 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_081730706b8c3f1f3d07627b3d065a1bb7efc23ae228c959ac0a7b3c98775627->enter($__internal_081730706b8c3f1f3d07627b3d065a1bb7efc23ae228c959ac0a7b3c98775627_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 13
        echo "    <span class=\"label ";
        echo (($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) ? ("label-status-error") : ("disabled"));
        echo "\">
        <span class=\"icon\">";
        // line 14
        echo twig_include($this->env, $context, "@WebProfiler/Icon/exception.svg");
        echo "</span>
        <strong>Exception</strong>
        ";
        // line 16
        if ($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) {
            // line 17
            echo "            <span class=\"count\">
                <span>1</span>
            </span>
        ";
        }
        // line 21
        echo "    </span>
";
        
        $__internal_081730706b8c3f1f3d07627b3d065a1bb7efc23ae228c959ac0a7b3c98775627->leave($__internal_081730706b8c3f1f3d07627b3d065a1bb7efc23ae228c959ac0a7b3c98775627_prof);

        
        $__internal_35d8e75e67bcb8391b85d33a4910defb378a6381dabf9fc79d025a21d54fbb2b->leave($__internal_35d8e75e67bcb8391b85d33a4910defb378a6381dabf9fc79d025a21d54fbb2b_prof);

    }

    // line 24
    public function block_panel($context, array $blocks = array())
    {
        $__internal_7b933c358f67f3a32c5235f5e04c1f990dad4998e9172365f7373d85e033b1ea = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_7b933c358f67f3a32c5235f5e04c1f990dad4998e9172365f7373d85e033b1ea->enter($__internal_7b933c358f67f3a32c5235f5e04c1f990dad4998e9172365f7373d85e033b1ea_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        $__internal_5b228468a1870fc19f262a43295fd61a25c1aa7c6b3e2b0a4697f0936e0508c0 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_5b228468a1870fc19f262a43295fd61a25c1aa7c6b3e2b0a4697f0936e0508c0->enter($__internal_5b228468a1870fc19f262a43295fd61a25c1aa7c6b3e2b0a4697f0936e0508c0_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 25
        echo "    <h2>Exceptions</h2>

    ";
        // line 27
        if ( !$this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) {
            // line 28
            echo "        <div class=\"empty\">
            <p>No exception was thrown and caught during the request.</p>
        </div>
    ";
        } else {
            // line 32
            echo "        <div class=\"sf-reset\">
            ";
            // line 33
            echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_exception", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
            echo "
        </div>
    ";
        }
        
        $__internal_5b228468a1870fc19f262a43295fd61a25c1aa7c6b3e2b0a4697f0936e0508c0->leave($__internal_5b228468a1870fc19f262a43295fd61a25c1aa7c6b3e2b0a4697f0936e0508c0_prof);

        
        $__internal_7b933c358f67f3a32c5235f5e04c1f990dad4998e9172365f7373d85e033b1ea->leave($__internal_7b933c358f67f3a32c5235f5e04c1f990dad4998e9172365f7373d85e033b1ea_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/exception.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  138 => 33,  135 => 32,  129 => 28,  127 => 27,  123 => 25,  114 => 24,  103 => 21,  97 => 17,  95 => 16,  90 => 14,  85 => 13,  76 => 12,  63 => 9,  57 => 6,  54 => 5,  51 => 4,  42 => 3,  11 => 1,);
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

{% block head %}
    {% if collector.hasexception %}
        <style>
            {{ render(path('_profiler_exception_css', { token: token })) }}
        </style>
    {% endif %}
    {{ parent() }}
{% endblock %}

{% block menu %}
    <span class=\"label {{ collector.hasexception ? 'label-status-error' : 'disabled' }}\">
        <span class=\"icon\">{{ include('@WebProfiler/Icon/exception.svg') }}</span>
        <strong>Exception</strong>
        {% if collector.hasexception %}
            <span class=\"count\">
                <span>1</span>
            </span>
        {% endif %}
    </span>
{% endblock %}

{% block panel %}
    <h2>Exceptions</h2>

    {% if not collector.hasexception %}
        <div class=\"empty\">
            <p>No exception was thrown and caught during the request.</p>
        </div>
    {% else %}
        <div class=\"sf-reset\">
            {{ render(path('_profiler_exception', { token: token })) }}
        </div>
    {% endif %}
{% endblock %}
", "@WebProfiler/Collector/exception.html.twig", "C:\\Users\\Lalka\\Desktop\\PHP-Skeleton\\vendor\\symfony\\symfony\\src\\Symfony\\Bundle\\WebProfilerBundle\\Resources\\views\\Collector\\exception.html.twig");
    }
}
